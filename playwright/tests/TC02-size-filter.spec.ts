import { expect, test } from '@playwright/test';
import { sizeFilterTestData } from '../testData/sizeFilterTestData';
import { SizeFilterPage } from '../pageObjects/SizeFilterPage';

test(sizeFilterTestData.testName, async ({ page }) => {
  const sizeFilterPage = new SizeFilterPage(page);

  await sizeFilterPage.openHomePage();
  await sizeFilterPage.dismissCookieConsentIfPresent();
  await sizeFilterPage.openCategory(sizeFilterTestData.categoryPath);

  await expect(sizeFilterPage.getCategoryHeading()).toContainText(sizeFilterTestData.expectedCategoryTitle);
  const initialProductCount = await sizeFilterPage.getProductCount();

  await sizeFilterPage.filterBySize(sizeFilterTestData.size);

  await expect(sizeFilterPage.getActiveSizeFilter()).toBeVisible();
  await expect(sizeFilterPage.getCategoryHeading()).toContainText(sizeFilterTestData.size);
  await expect(sizeFilterPage.getProductCards()).not.toHaveCount(sizeFilterTestData.emptyProductCount);
  await expect.poll(() => sizeFilterPage.getProductCount()).toBeLessThan(initialProductCount);
});