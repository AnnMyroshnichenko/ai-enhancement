import { expect, test } from '@playwright/test';
import { SearchPage } from '../pageObjects/SearchPage';
import { searchTestData } from '../testData/searchTestData';

test(searchTestData.testName, async ({ page }) => {
  const searchPage = new SearchPage(page);

  await searchPage.openHomePage();
  await searchPage.dismissCookieConsentIfPresent();
  await searchPage.searchFor(searchTestData.searchTerm);

  await expect(searchPage.getResultsHeading(searchTestData.searchTerm)).toBeVisible();
  await expect(searchPage.getProductCards()).not.toHaveCount(searchTestData.emptyProductCount);
  await expect(searchPage.getFirstProductCard()).toBeVisible();
  await expect(searchPage.getFirstProductCard()).toContainText(searchTestData.expectedProductText);
});
