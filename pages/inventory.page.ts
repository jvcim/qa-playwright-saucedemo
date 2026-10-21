import { type Page } from '@playwright/test';

export class InventoryPage {
  constructor(private readonly page: Page) {}

  get items() { return this.page.locator('.inventory_item'); }
  get titles() { return this.page.locator('.inventory_item_name'); }
  get cartBadge() { return this.page.locator('.shopping_cart_badge'); }
  get sortSelect() { return this.page.locator('[data-test="product-sort-container"]'); }
  get prices() { return this.page.locator('.inventory_item_price'); }
  get menuButton() { return this.page.locator('#react-burger-menu-btn'); }
  get logoutLink() { return this.page.locator('#logout_sidebar_link'); }

  async addProductByName(name: string) {
    const product = this.items.filter({ has: this.page.getByText(name, { exact: true }) });
    await product.getByRole('button', { name: 'Add to cart' }).click();
  }

  async removeProductByName(name: string) {
    const product = this.items.filter({ has: this.page.getByText(name, { exact: true }) });
    await product.getByRole('button', { name: 'Remove' }).click();
  }

  async openCart() { await this.page.locator('.shopping_cart_link').click(); }

  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }
}
