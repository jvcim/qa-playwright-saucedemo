import { type Page } from '@playwright/test';

export class CartPage {
  constructor(private readonly page: Page) {}
  get items() { return this.page.locator('.cart_item'); }
  get checkoutButton() { return this.page.locator('[data-test="checkout"]'); }
  async checkout() { await this.checkoutButton.click(); }
}
