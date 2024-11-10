# Swag Labs Cypress Test Suite

This repository contains Cypress tests for the Swag Labs demo site (https://www.saucedemo.com).
! [LOGINPAGE] (assets/logpage.png)

## Prerequisites

Before running the tests, ensure you have the following installed:

- Node.js (v14 or later)
- npm (usually comes with Node.js)

## Setup

1. Clone this repository to your local machine:
   ```
   git clone https://github.com/your-username/swag-labs-cypress-tests.git
   cd swag-labs-cypress-tests
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Running the Tests

### Headless Mode

To run the tests in headless mode (in the command line):

```
npx cypress run
```

### Interactive Mode

To open the Cypress Test Runner:

```
npx cypress open
```

Then, click on the test file `sauce-demo.cy.js` to run the tests.

## Test Structure

The test suite covers the following scenarios:

1. Login Flow
   - Successful login with valid credentials
   - Error handling for invalid credentials

2. Inventory Page
   - Verification of product count
   - Product sorting functionality
   - Adding items to cart
   - Product details verification

## Notes

### Observations

- The tests are designed for the Swag Labs demo site, which is a static site. If the site structure changes, the tests may need to be updated.
- The current tests cover basic functionality. Additional tests may be needed for more comprehensive coverage.

### Potential Blockers

1. **Network Issues**: Ensure you have a stable internet connection when running the tests.
2. **Site Availability**: If the Swag Labs demo site is down or changed, the tests will fail.
3. **Browser Compatibility**: These tests are designed to run on Chrome by default. Running on other browsers may require additional configuration.

### Screenshots

! [RUNNER] (assets/runner.png)

! [SCRIPTS-RAN] (assets/inventory.png)


## Testing Strategy

### Scope

The scope of these tests covers the core functionality of the Swag Labs demo site, focusing on:

1. User authentication (login process)
2. Product inventory display and interaction
3. Basic e-commerce functionality (adding items to cart)

I've prioritized these areas as they represent the critical user journey and are essential for the site's primary purpose as an e-commerce platform.

### Test Techniques Employed

1. **Functional Testing**: The primary focus is on verifying that each feature of the application works as expected. This includes successful login, correct product display, and accurate cart functionality.

2. **UI Testing**:  Validate that UI elements are present, visible, and contain the correct text or values.

3. **Positive and Negative Testing**: I included both happy path scenarios (e.g., successful login) and error scenarios (e.g., login with invalid credentials) to ensure proper functionality and error handling.

4. **Data-Driven Testing**: Although limited in this suite, I used different sets of login credentials to test various user scenarios.

5. **Integration Testing**: While primarily focused on UI, these tests inherently verify the integration between the frontend and backend systems.

### Reasons for Choices

1. **Use of Cypress**: 
   - Cypress provides a robust, developer-friendly framework for end-to-end testing.
   - It allows for easy setup and quick test execution, making it ideal for continuous integration environments.
   - Cypress's ability to interact with the browser directly leads to more stable tests compared to other tools.

2. **Focus on Critical Path**:
   - I prioritized testing the login and basic shopping functionality as these represent the core user journey.
   - This approach ensures that the most crucial aspects of the site are working correctly, even if minor features have issues.

3. **Combination of Positive and Negative Tests**:
   - This ensures that the application not only works under ideal conditions but also handles errors gracefully.
   - It helps in identifying potential security issues, especially in the authentication process.

4. **Emphasis on UI Verification**:
   - As an e-commerce site, the correct display of products and prices is crucial for user experience and business integrity.
   - Verifying UI elements ensures that users can interact with the site as intended.

5. **Limited Scope**:
   - While not exhaustive, this test suite covers the most critical functionalities.
   - This approach allows for quick feedback in a CI/CD pipeline, enabling faster iterations and deployments.

### Areas for Future Expansion

1. Performance testing for page load times and responsiveness
2. Cross-browser compatibility testing
3. Mobile responsiveness testing
4. More extensive negative testing scenarios
5. End-to-end order placement and checkout process testing

! [LOGIN] (assets/logtest.png)

This strategy provides a balanced approach to testing the Swag Labs demo site, ensuring core functionalities are verified while maintaining a manageable and quick-to-execute test suite. As the application evolves, the test suite can be expanded to cover more scenarios and edge cases.

## Authors
- [Henrietta Onoge] (hetty8004@gmail.com)