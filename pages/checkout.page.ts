import { type Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private readonly page: Page) {}

  get error() { return this.page.locator('[data-test="error"]'); }
  get finishButton() { return this.page.locator('[data-test="finish"]'); }
  get completeHeader() { return this.page.locator('[data-test="complete-header"]'); }
  get summaryItems() { return this.page.locator('.cart_item'); }
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
}
