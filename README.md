# AI Enhancement practice

## Summary

This project contains automated end-to-end tests for [MODIVO](https://modivo.ua/).

The project demonstrates the use of AI tools to generate automated tests with Playwright and Cypress.

The Playwright tests follow the Page Object Model, with page objects and test data separated from test specifications. Cypress tests use `cy.prompt()` to generate and execute interactions from natural-language instructions.


## Technologies and tools:

* Playwright 
* TypeScript
* Playwright MCP
* VS Code
* Cypress
* `cy.prompt()`
* Cypress Cloud
* Node.js and npm

## Requirements

Make sure the following software is installed:

| Requirement        | Version               |
| ------------------ | --------------------- |
| Node.js            | 22.x                  |
| npm                | Bundled with Node.js  |
| Visual Studio Code | Latest stable version |
| Google Chrome      | Latest stable version |
| Git                | Latest stable version |

## Installation Steps

### 1. Clone the repository

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

## How to Run Tests

### Playwright

Run all Playwright tests:

```bash
npx playwright test
```

Run a specific test:

```bash
npx playwright test tests/TC01-product-search.spec.ts
```

```bash
npx playwright test tests/TC02-size-filter.spec.ts
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run tests in a specific browser:

```bash
npx playwright test --project=chromium
```

### Cypress

Open Cypress Test Runner:

```bash
npx cypress open
```

Select E2E Testing and choose Chrome to run tests interactively.

Run all Cypress tests in Chrome:

```bash
npx cypress run --browser chrome
```

Run a specific test:

```bash
npx cypress run --browser chrome --spec "cypress/e2e/TC03-product-details-gallery.cy.js"
```

```bash
npx cypress run --browser chrome --spec "cypress/e2e/TC04-homepage.cy.js"
```

## How to Generate Reports

### Playwright HTML Report

1. Run the tests with the HTML reporter:

```bash
npx playwright test --reporter=html
```

2. Open the generated report:

```bash
npx playwright show-report
```

### Cypress Cloud Reports

1. Run the Cypress tests:

```bash
npx cypress run --browser chrome
```

2. View the results:

If the project is configured for Cypress Cloud recording, the results are uploaded automatically when the run is recorded.

Open the Cypress Cloud dashboard and select the project to view the recorded test runs.