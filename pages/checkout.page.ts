import { type Locator, type Page } from '@playwright/test';
import { parseUsdToCents } from '../utils/money';

export type CheckoutSummaryItem = {
  name: string;
  priceInCents: number;
};

export class CheckoutPage {
  constructor(private readonly page: Page) {}

  get error() { return this.page.locator('[data-test="error"]'); }
  get finishButton() { return this.page.locator('[data-test="finish"]'); }
  get completeHeader() { return this.page.locator('[data-test="complete-header"]'); }
  get summaryItems() { return this.page.locator('.cart_item'); }
  get summaryItemNames() { return this.summaryItems.locator('.inventory_item_name'); }
  get summaryItemPrices() { return this.summaryItems.locator('.inventory_item_price'); }
  get summarySubtotal() { return this.page.locator('.summary_subtotal_label'); }
  get summaryTax() { return this.page.locator('.summary_tax_label'); }
  get summaryTotal() { return this.page.locator('.summary_total_label'); }

  async fillCustomer(firstName: string, lastName: string, postalCode: string) {
    await this.page.locator('[data-test="firstName"]').fill(firstName);
    await this.page.locator('[data-test="lastName"]').fill(lastName);
    await this.page.locator('[data-test="postalCode"]').fill(postalCode);
    await this.page.locator('[data-test="continue"]').click();
  }
  async finish() { await this.finishButton.click(); }

  async getSummaryItems(): Promise<CheckoutSummaryItem[]> {
    const names = await this.summaryItemNames.allTextContents();
    const prices = await this.summaryItemPrices.allTextContents();

    if (names.length !== prices.length) {
      throw new Error('Resumo do checkout contém itens sem nome ou preço correspondente.');
    }

    return names.map((name, index) => ({
      name: name.trim(),
      priceInCents: parseUsdToCents(prices[index])
    }));
  }

  async getSubtotalInCents(): Promise<number> {
    return this.getAmountInCents(this.summarySubtotal);
  }

  async getTaxInCents(): Promise<number> {
    return this.getAmountInCents(this.summaryTax);
  }

  async getTotalInCents(): Promise<number> {
    return this.getAmountInCents(this.summaryTotal);
  }

  private async getAmountInCents(locator: Locator): Promise<number> {
    return parseUsdToCents((await locator.textContent()) ?? '');
  }
}
