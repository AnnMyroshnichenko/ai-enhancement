# AI Test Generation Prompts

 ## Prompt 1 (GitHub Copilot + Playwright MCP):

Act as a Senior QA Automation Engineer. Use the connected Playwright MCP server to inspect the live MODIVO website (https://modivo.ua/) and generate a maintainable automated end-to-end test using Playwright and TypeScript.

**Test case**: TC-01 — Product Search

**Objective**: Verify that a user can search for a product and that the search results contain relevant products.

**Test scenario**:

- Open the MODIVO homepage.
- Dismiss the cookie consent dialog if it is present.
- Enter a product search term in the search field.
- Submit the search.
- Verify that the search results heading contains the search term.
- Verify that the search results contain at least one product.
- Verify that the first product card is visible.
- Verify that the first product card contains the expected product text.

**Expected result**:

After entering the specified product search term and submitting the search, the search results page or results section is displayed. The results heading contains the entered search term, at least one product is displayed, the first product card is visible, and the first product card contains the expected product information.

Generate the complete code for all three files. Inspect the website before choosing selectors, and explain any assumptions. Do not claim that the test passes unless it has actually been executed.

## Prompt 2 (GitHub Copilot + Playwright MCP): 

Act as a Senior QA Automation Engineer. Use the connected Playwright MCP server to inspect the live MODIVO website (https://modivo.ua/) and implement an end-to-end test using Playwright Test and TypeScript.

**Test case**: TC-02 — Product Size Filter

**Objective**: Verify that a user can filter products by size and that the product listing updates accordingly.

**Test scenario**:

- Open the MODIVO homepage.
- Dismiss the cookie consent dialog if it is present.
- Navigate to the specified product category.
- Verify that the category heading contains the expected category title.
- Record the initial number of product cards.
- Apply the specified size filter.
- Verify that the active size filter is visible.
- Verify that the category heading reflects the selected size, if this is how the actual website represents the filter.
- Verify that at least one product card remains visible.
- Verify that the number of products has decreased after filtering.

**Expected result**:

 After navigating to the selected product category and applying the specified size filter, the selected size is displayed as an active filter. The product listing is updated and contains at least one product. The number of displayed products after applying the filter is lower than the initial number of products, confirming that the filter affected the product listing.

Generate the complete code for all three files. Explain how the product count comparison works and how the filter is verified. Do not claim the test passed unless it has actually been executed.

## Prompt 3 (Cypress cy.prompt()):

Act as a QA automation engineer. Use Cypress `cy.prompt()` to generate and execute an end-to-end test for the MODIVO website.

**Test case:** TC-03 — Product Details & Image Gallery

**Objective:** Verify that a product details page displays essential product information and that users can switch between product images.

**Test steps:**

1. Visit the MODIVO homepage.
2. Dismiss a cookie consent dialog, privacy notice, newsletter popup, or other modal if it is visible and blocks interaction.
3. Wait until the page is ready for interaction.
4. Navigate to a suitable public product category.
5. Open the first available product.
6. Verify that the product details page is displayed.
7. Verify that the product name is visible.
8. Verify that the product price is visible.
9. Verify that product images are displayed.
10. Click another visible image in the product gallery.
11. Verify that the main displayed product image changes.

**Requirements:**

* Use `cy.prompt()` with an array of natural-language steps.
* Interact with the actual MODIVO website.
* Use visible, user-interactable elements.
* Dismiss overlays only when they block the page.
* Verify product details using meaningful assertions.
* Verify that selecting another gallery image changes the main displayed image.
* Do not interact with hidden elements, including `sr-only` elements and accessibility live regions.
* Do not use forced clicks to bypass visibility checks.
* Allow the page sufficient time to load through Cypress's built-in waiting and retry mechanisms.
* Keep the test focused on the product details and image gallery functionality.

**Expected result:**

The product details page displays the product name, price, and images. Selecting another image in the gallery updates the main displayed product image.

## Prompt 4 (Cypress cy.prompt()):

Act as a QA automation engineer. Use Cypress `cy.prompt()` to generate and execute an end-to-end test for the MODIVO homepage.

**Test case:** TC-04 — Homepage

**Objective:** Verify that the homepage loads and displays its essential visual elements.

**Test steps:**

1. Visit the MODIVO homepage.
2. Dismiss a cookie consent dialog or other modal only if it is visible and blocks interaction with the page.
3. Verify that the visible MODIVO logo is displayed in the page header.
4. Verify that the homepage contains at least one visible main promotional banner or hero section.
5. Verify that the header search bar is available.

**Requirements:**

* Use `cy.prompt()` with an array of natural-language steps.
* Test the actual MODIVO homepage.
* Verify only elements that are visible and accessible to the user.
* Handle cookie consent and other blocking overlays conditionally.
* Verify the logo, promotional content, and search bar using meaningful visibility or availability assertions.
* Do not interact with hidden elements or use forced clicks.
* Avoid unnecessary navigation and interactions.
* Keep the test independent and focused on the homepage's essential elements.

**Expected result:**

The MODIVO homepage loads successfully, and the visible logo, at least one promotional banner or hero section, and the header search bar are available.
