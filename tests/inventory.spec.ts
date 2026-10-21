import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';
import { users } from '../utils/test-data';

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.open();
  await login.login(users.standard.username, users.standard.password);
  await expect(page).toHaveURL(/\/inventory\.html$/);
});

test('TC-INV-001 @smoke inventário apresenta produtos', async ({ page }) => {
  const inventory = new InventoryPage(page);
  await expect(inventory.items.first()).toBeVisible();
  expect(await inventory.items.count()).toBeGreaterThan(0);
});

test('TC-INV-002 @regression ordenação por nome Z-A', async ({ page }) => {
  const inventory = new InventoryPage(page);
  await inventory.sortSelect.selectOption('za');
  const titles = await inventory.titles.allTextContents();
  expect(titles.length).toBeGreaterThan(1);
  expect(titles).toEqual([...titles].sort((a, b) => b.localeCompare(a, 'en')));
});

test('TC-INV-003 @regression ordenação por preço crescente', async ({ page }) => {
  const inventory = new InventoryPage(page);
  await inventory.sortSelect.selectOption('lohi');
  const prices = (await inventory.prices.allTextContents()).map((value) => Number(value.replace('$', '')));
  expect(prices.length).toBeGreaterThan(1);
  expect(prices).toEqual([...prices].sort((a, b) => a - b));
});

test('TC-CART-001 @smoke adicionar e remover produto', async ({ page }) => {
  const inventory = new InventoryPage(page);
  await inventory.addProductByName('Sauce Labs Backpack');
  await expect(inventory.cartBadge).toHaveText('1');
  await inventory.removeProductByName('Sauce Labs Backpack');
  await expect(inventory.cartBadge).toHaveCount(0);
});

test('TC-CART-002 @regression item permanece no carrinho após navegar', async ({ page }) => {
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  await inventory.addProductByName('Sauce Labs Backpack');
  await inventory.openCart();
  await expect(cart.itemNames).toContainText(['Sauce Labs Backpack']);
  await cart.continueShopping();
  await expect(inventory.cartBadge).toHaveText('1');
  await inventory.openCart();
  await expect(cart.itemNames).toContainText(['Sauce Labs Backpack']);
});

test('TC-CART-003 @regression carrinho exibe múltiplos produtos', async ({ page }) => {
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  await inventory.addProductByName('Sauce Labs Backpack');
  await inventory.addProductByName('Sauce Labs Bike Light');
  await expect(inventory.cartBadge).toHaveText('2');
  await inventory.openCart();
  await expect(cart.items).toHaveCount(2);
  await expect(cart.itemNames).toContainText(['Sauce Labs Backpack', 'Sauce Labs Bike Light']);
});
