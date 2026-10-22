import { test, expect, type Page } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage, type CheckoutSummaryItem } from '../pages/checkout.page';
import { users, checkoutCustomer } from '../utils/test-data';

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.open();
  await login.login(users.standard.username, users.standard.password);
  await expect(page).toHaveURL(/\/inventory\.html$/);
});

async function openCheckout(page: Page, productNames: string[]) {
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);

  for (const productName of productNames) {
    await inventory.addProductByName(productName);
  }

  await inventory.openCart();
  await expect(cart.items).toHaveCount(productNames.length);
  await cart.checkout();

  return { inventory, cart, checkout: new CheckoutPage(page) };
}

const backpack = 'Sauce Labs Backpack';
const bikeLight = 'Sauce Labs Bike Light';

test('TC-CHK-001 @smoke finalizar compra simulada', async ({ page }) => {
  const { checkout } = await openCheckout(page, [backpack]);
  await checkout.fillCustomer(checkoutCustomer.firstName, checkoutCustomer.lastName, checkoutCustomer.postalCode);
  await expect(page).toHaveURL(/\/checkout-step-two\.html$/);
  await expect(checkout.summaryTotal).toBeVisible();
  await checkout.finish();
  await expect(checkout.completeHeader).toHaveText('Thank you for your order!');
});

test('TC-CHK-002 @regression nome obrigatório no checkout', async ({ page }) => {
  const { checkout } = await openCheckout(page, [backpack]);
  await checkout.fillCustomer('', checkoutCustomer.lastName, checkoutCustomer.postalCode);
  await expect(checkout.error).toContainText('First Name is required');
});

test('TC-CHK-003 @regression sobrenome obrigatório no checkout', async ({ page }) => {
  const { checkout } = await openCheckout(page, [backpack]);
  await checkout.fillCustomer(checkoutCustomer.firstName, '', checkoutCustomer.postalCode);
  await expect(checkout.error).toContainText('Last Name is required');
});

test('TC-CHK-004 @regression CEP obrigatório no checkout', async ({ page }) => {
  const { checkout } = await openCheckout(page, [backpack]);
  await checkout.fillCustomer(checkoutCustomer.firstName, checkoutCustomer.lastName, '');
  await expect(checkout.error).toContainText('Postal Code is required');
});

test('TC-CHK-005 @regression resumo financeiro corresponde ao carrinho', async ({ page }) => {
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  const selectedProducts = [backpack, bikeLight];
  const expectedItems: CheckoutSummaryItem[] = [];
  for (const productName of selectedProducts) {
    expectedItems.push({
      name: productName,
      priceInCents: await inventory.getProductPriceInCents(productName)
    });
    await inventory.addProductByName(productName);
  }

  await expect(inventory.cartBadge).toHaveText('2');
  await inventory.openCart();
  await expect(cart.items).toHaveCount(2);
  await cart.checkout();
  await checkout.fillCustomer(checkoutCustomer.firstName, checkoutCustomer.lastName, checkoutCustomer.postalCode);
  await expect(checkout.summaryItems).toHaveCount(2);
  expect(await checkout.getSummaryItems()).toEqual(expectedItems);

  const expectedSubtotalInCents = expectedItems.reduce((total, item) => total + item.priceInCents, 0);
  const displayedSubtotalInCents = await checkout.getSubtotalInCents();
  const displayedTaxInCents = await checkout.getTaxInCents();
  const displayedTotalInCents = await checkout.getTotalInCents();

  expect(displayedSubtotalInCents).toBe(expectedSubtotalInCents);
  expect(displayedTotalInCents).toBe(displayedSubtotalInCents + displayedTaxInCents);
});
