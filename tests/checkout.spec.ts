import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';
import { users, checkoutCustomer } from '../utils/test-data';

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  await login.open();
  await login.login(users.standard.username, users.standard.password);
  await inventory.addProductByName('Sauce Labs Backpack');
  await inventory.openCart();
  await expect(cart.items).toHaveCount(1);
  await cart.checkout();
});

test('TC-CHK-001 @smoke finalizar compra simulada', async ({ page }) => {
  const checkout = new CheckoutPage(page);
  await checkout.fillCustomer(checkoutCustomer.firstName, checkoutCustomer.lastName, checkoutCustomer.postalCode);
  await expect(page).toHaveURL(/\/checkout-step-two\.html$/);
  await expect(page.locator('.summary_total_label')).toBeVisible();
  await checkout.finish();
  await expect(checkout.completeHeader).toHaveText('Thank you for your order!');
});

test('TC-CHK-002 @regression nome obrigatório no checkout', async ({ page }) => {
  const checkout = new CheckoutPage(page);
  await checkout.fillCustomer('', checkoutCustomer.lastName, checkoutCustomer.postalCode);
  await expect(checkout.error).toContainText('First Name is required');
});
