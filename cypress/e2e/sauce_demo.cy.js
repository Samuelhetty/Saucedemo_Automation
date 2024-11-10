describe('Swag Labs E2E Tests', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com')
    })
  
    describe('Login Flow', () => {
      it('should login successfully with valid credentials', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        
        // Verify successful login by checking URL and inventory presence
        cy.url().should('include', '/inventory.html')
        cy.get('.inventory_list').should('be.visible')
      })
  
      it('should show error for invalid credentials', () => {
        cy.get('[data-test="username"]').type('invalid_user')
        cy.get('[data-test="password"]').type('wrong_password')
        cy.get('[data-test="login-button"]').click()
        
        cy.get('[data-test="error"]').should('be.visible')
      })
    })
  
    describe('Inventory Page', () => {
      beforeEach(() => {
        // Login before each inventory test
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
      })
  
      it('should display correct number of products', () => {
        cy.get('.inventory_item').should('have.length', 6)
      })
  
      it('should sort products by name', () => {
        cy.get('[data-test="product_sort_container"]').select('az')
        
        // Get all product names and verify they're in alphabetical order
        cy.get('.inventory_item_name')
          .then($items => {
            const names = [...$items].map(el => el.innerText)
            const sortedNames = [...names].sort()
            expect(names).to.deep.equal(sortedNames)
          })
      })
  
      it('should add items to cart', () => {
        // Add Sauce Labs Backpack to cart
        cy.contains('.inventory_item', 'Sauce Labs Backpack')
          .find('button')
          .click()
  
        // Verify cart badge shows 1 item
        cy.get('.shopping_cart_badge').should('have.text', '1')
        
        // Add Sauce Labs Bike Light to cart
        cy.contains('.inventory_item', 'Sauce Labs Bike Light')
          .find('button')
          .click()
  
        // Verify cart badge shows 2 items
        cy.get('.shopping_cart_badge').should('have.text', '2')
      })
  
      it('should display correct product details', () => {
        // Verify Backpack details
        cy.contains('.inventory_item', 'Sauce Labs Backpack')
          .within(() => {
            cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack')
            cy.get('.inventory_item_price').should('have.text', '$29.99')
            cy.get('button').should('have.text', 'Add to cart')
          })
  
        // Verify Bike Light details
        cy.contains('.inventory_item', 'Sauce Labs Bike Light')
          .within(() => {
            cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Bike Light')
            cy.get('.inventory_item_price').should('have.text', '$9.99')
            cy.get('button').should('have.text', 'Add to cart')
          })
      })
    })
  })