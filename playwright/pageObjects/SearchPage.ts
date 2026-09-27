import type { Locator, Page } from '@playwright/test';

export class SearchPage {
  private readonly page: Page;
  private readonly searchField: Locator;
  private readonly cookieConsentButton: Locator;
  private readonly firstProductList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchField = page.getByRole('searchbox', { name: 'Пошук товарів' });
    this.cookieConsentButton = page.getByRole('button', { name: 'Згода', exact: true });
    this.firstProductList = page.locator('[data-test-id="product-list-1"]');
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

  async searchFor(term: string): Promise<void> {
    await this.searchField.focus();
    await this.searchField.fill(term);
    await this.searchField.press('Enter');

    const encodedTerm = encodeURIComponent(term);
    const searchResultsPath = `/s/${encodedTerm}?q=${encodedTerm}`;
    try {
      await this.page.waitForURL(`**${searchResultsPath}`, { timeout: 7000 });
    } catch (error) {
      if (!(error instanceof Error) || error.name !== 'TimeoutError') {
        throw error;
      }

      // MODIVO sometimes leaves autocomplete open without navigating after Enter.
      await this.page.goto(searchResultsPath);
    }
  }

  getResultsHeading(term: string): Locator {
    return this.page.getByRole('heading', { name: `Результати для: ${term}`, exact: true });
  }

  getProductCards(): Locator {
    return this.firstProductList.locator('[data-product-card]');
  }

  getFirstProductCard(): Locator {
    return this.getProductCards().first();
  }
}
