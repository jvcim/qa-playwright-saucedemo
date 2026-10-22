import { type Locator, type Page } from '@playwright/test';
import { parseUsdToCents } from '../utils/money';

export class InventoryPage {
  constructor(private readonly page: Page) {}

  get items() { return this.page.locator('.inventory_item'); }
  get titles() { return this.page.locator('.inventory_item_name'); }
  get cartBadge() { return this.page.locator('.shopping_cart_badge'); }
  get sortSelect() { return this.page.locator('[data-test="product-sort-container"]'); }
  get prices() { return this.page.locator('.inventory_item_price'); }
  get addToCartButtons() { return this.page.getByRole('button', { name: 'Add to cart' }); }
  get menuButton() { return this.page.locator('#react-burger-menu-btn'); }
  get logoutLink() { return this.page.locator('#logout_sidebar_link'); }

  productByName(name: string): Locator {
    return this.items.filter({ has: this.page.getByText(name, { exact: true }) });
  }

  async getProductPriceInCents(name: string): Promise<number> {
    const price = await this.productByName(name).locator('.inventory_item_price').textContent();
    return parseUsdToCents(price ?? '');
  }

  async addProductByName(name: string) {
    const product = this.productByName(name);
    await product.getByRole('button', { name: 'Add to cart' }).click();
  }

  async removeProductByName(name: string) {
    const product = this.productByName(name);
    await product.getByRole('button', { name: 'Remove' }).click();
  }

  async openCart() { await this.page.locator('.shopping_cart_link').click(); }

  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }
}
