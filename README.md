# Juice Shop Automation Tests

This project contains Cypress tests for the Juice Shop application. The tests cover various shopping scenarios, including user creation, login, adding items to the basket, filling up address from, deleting item from basket and verifying the basket contents.

## Prerequisites

Before running the tests, ensure to have the following installed on your machine:

- `Node.js`
- `npm`
- `Postman`

## Installation

1. Clone this repository to your local machine:
```bash
git clone https://github.com/nirob2017/juice-shop-automation.git
```
2. Navigate to the project directory:
```bash
cd juice-shop-automation
```
3. Install project dependencies:
```bash
npm install
```

## Running Automated Cypress UI & API Tests
To run the tests, use the following command:

- In GUI Mode:
```bash
npm run test:gui
```
- In Headless Mode:
```bash
npm run test:headless
```
- For running only UI Test:
```bash
npm run test:ui
```
- For running only API Test:
```bash
npm run test:api
```
## Running Automated Postman API Tests

The project includes a Postman collection (`Juice Shop.postman_collection.json`) for API testing.

### Steps to Run

1. Open Postman.
2. Click **Import** and select the `Juice Shop.postman_collection.json` file.
3. Select the collection, click **Run**.


## Project Structure

The UI tests are written using Cypress and structured using the Page Object Model (POM). Test files are located in the `cypress/e2e/uiTests.cy.js` file. Each test file interacts with the POM files located in the `cypress/pages` directory.

The API tests are also written using Cypress and are located in the `cypress/e2e/apiTests.cy.js` file. API requests are managed using utility functions located in the `cypress/support/apiRequests.js` file.

The automated API tests using postman collection is included in root directory as `Juice Shop.postman_collection.json` file. Import this file into Postman to run the API tests.

The project structure is as follows:

`cypress`: Contains the Cypress tests, fixtures, and custom commands.

`e2e`: Contains the test files for end-to-end tests.
- `apiTests.cy.js`: Contains the API test cases.
- `uiTests.cy.js`: Contains the UI test cases.

`fixtures`: Contains test data used by the tests but didn't used.

`pages`: Contains the Page Object Model (POM) files for structuring UI tests.

- `landingPage.js`: POM file for the landing page.
- `loginBasketAndAddressPage.js`: POM file for login, basket, and address page.
- `registrationPage.js`: POM file for the registration page.

`support`: Contains the utility functions for making API requests and other support functions.

- `apiRequests.js`: Utility functions for API requests.
- `commands.js`: Custom commands for Cypress.
- `e2e.js`: Support file for end-to-end tests.
- `utils.js`: General utility functions.

`cypress.config.js`: Cypress configuration file.

`package.json`: Project run commands, metadata and dependencies.

`Juice Shop.postman_collection.json`: Postman collection for API automation testing.

### Happy Testing!
