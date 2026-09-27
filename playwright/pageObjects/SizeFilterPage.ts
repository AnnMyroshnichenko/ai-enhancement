import type { Locator, Page } from '@playwright/test';

export class SizeFilterPage {
  private readonly page: Page;
  private readonly searchField: Locator;
  private readonly cookieConsentButton: Locator;
  private readonly categoryHeading: Locator;
  private readonly sizeFilterButton: Locator;
  private readonly productCountLabel: Locator;
  private readonly productCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchField = page.getByRole('searchbox', { name: 'Пошук товарів' });
    this.cookieConsentButton = page.getByRole('button', { name: 'Згода', exact: true });
    this.categoryHeading = page.getByRole('heading', { level: 1 });
    this.sizeFilterButton = page.getByRole('button', { name: 'Розмір', exact: true });
    this.productCountLabel = page.getByText('Продукти:', { exact: false });
    this.productCards = page.locator('[data-test-id="product-list-1"] [data-product-card]');
  }

  async openHomePage(): Promise<void> {
    await this.page.goto('/');
    await this.searchField.waitFor({ state: 'visible' });
  }

  async dismissCookieConsentIfPresent(): Promise<void> {
    try {
      await this.cookieConsentButton.waitFor({ state: 'visible', timeout: 3000 });
    } catch (error) {
      if (error instanceof Error && error.name === 'TimeoutError') {
        return;
      }
      throw error;
    }

    await this.cookieConsentButton.click();
    await this.cookieConsentButton.waitFor({ state: 'hidden' });
  }

  async openCategory(categoryPath: string): Promise<void> {
    await this.page.goto(categoryPath);
    await this.categoryHeading.waitFor({ state: 'visible' });
    await this.productCountLabel.waitFor({ state: 'visible' });
  }

  async getProductCount(): Promise<number> {
    const label = await this.productCountLabel.innerText();
    const digits = label.replace(/\D/g, '');
    const count = Number(digits);

    if (!Number.isFinite(count) || digits.length === 0) {
      throw new Error(`Unable to read product count from: ${label}`);
    }

    return count;
  }

  async filterBySize(size: string): Promise<void> {
    await this.sizeFilterButton.scrollIntoViewIfNeeded();
    await this.sizeFilterButton.click();

    const sizeDialog = this.page.getByRole('dialog', { name: /Розмір/ });
    await sizeDialog.waitFor({ state: 'visible' });

    const sizeOption = sizeDialog.getByRole('button', { name: size, exact: true });
    await sizeOption.click();

    const applyButton = sizeDialog.getByRole('button', { name: 'Показати', exact: true });
    await applyButton.waitFor({ state: 'visible' });
    await applyButton.click();
  }

  getCategoryHeading(): Locator {
    return this.categoryHeading;
  }

  getActiveSizeFilter(): Locator {
    return this.page.getByRole('button', { name: /^Розмір\s+\d+$/ });
  }

  getProductCards(): Locator {
    return this.productCards;
  }

  getCurrentUrl(): string {
    return this.page.url();
  }
}
