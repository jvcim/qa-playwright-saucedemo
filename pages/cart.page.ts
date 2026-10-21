import { type Page } from '@playwright/test';

export class CartPage {
  constructor(private readonly page: Page) {}
  get items() { return this.page.locator('.cart_item'); }
  get checkoutButton() { return this.page.locator('[data-test="checkout"]'); }
  get continueShoppingButton() { return this.page.locator('[data-test="continue-shopping"]'); }
  get itemNames() { return this.page.locator('.inventory_item_name'); }
  async checkout() { await this.checkoutButton.click(); }
  async continueShopping() { await this.continueShoppingButton.click(); }
}
