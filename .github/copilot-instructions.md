# Playwright MCP Test Generation Rules

These rules apply to the Playwright MCP test-generation tasks in this project.

## Application Under Test

The application under test is: https://modivo.ua/

## Browser Exploration

Before generating a Playwright test:

1. Open the live application using Playwright MCP.
2. Inspect the relevant page.
3. Identify the elements required for the scenario.
4. Verify that the elements actually exist.
5. Determine the actual user workflow.
6. Identify stable selectors.
7. Identify meaningful assertions.

Do not guess the DOM structure or selectors.

## Selectors

Prefer stable Playwright locators such as:

* getByRole()
* getByLabel()
* getByPlaceholder()
* getByText() when appropriate
* stable data attributes

Avoid:

* generated CSS classes;
* long CSS selectors;
* fragile XPath;
* unnecessary DOM hierarchy.

## Waiting

- Do not use arbitrary fixed waits.

- Do not use: page.waitForTimeout() unless there is a specific technical reason.

- Prefer Playwright's automatic waiting and web-first assertions.

## Assertions

Every test must verify expected behavior.

Use meaningful assertions for:

* visible elements;
* URLs;
* page content;
* selected filters;
* search results;
* product information;
* relevant UI states.

## Page Object Model (POM)
- MANDATORY: Every test spec MUST have corresponding page object files.
- Always use the Page Object Model (POM) pattern for structuring UI automation code.
- NEVER create spec files without creating their corresponding page objects first.
- All locators and page interactions must be defined in page objects, not in spec files.

## Test Independence

- Each test must be independent.

- A test must not require another test to run first.

## Test Scope

- Generate only the requested test.

- Do not modify unrelated tests or project files.

## Test Data

- Do not use credentials or secrets.

- Avoid unnecessary dependency on a specific product that may disappear from the catalogue.

- Prefer data that can be discovered from the current application.

## Validation

After generating a test:

1. Run the test.
2. Inspect failures.
3. Determine the root cause.
4. Use Playwright MCP to inspect the application again if necessary.
5. Make the smallest necessary fix.
6. Run the test again.

Do not declare a test complete without executing it.

## Code Quality

- Use TypeScript.

- Keep tests readable and maintainable.

- Use clear test names.

- Avoid unnecessary abstraction and over-engineering.

## MCP Requirement

- All navigation, assertion, AND LOCATOR DISCOVERY must be performed via playwright-mcp.

- Do not claim that an element or workflow exists unless it has been verified against the current application.