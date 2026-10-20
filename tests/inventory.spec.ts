import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { users } from '../utils/test-data';

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.open();
  await login.login(users.standard.username, users.standard.password);
  await expect(page).toHaveURL(/\/inventory\.html$/);
});

test('TC-INV-001 @regression inventário apresenta produtos', async ({ page }) => {
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

test('TC-CART-001 @smoke adicionar e remover produto', async ({ page }) => {
  const inventory = new InventoryPage(page);
  await inventory.addProductByName('Sauce Labs Backpack');
  await expect(inventory.cartBadge).toHaveText('1');
  await inventory.removeProductByName('Sauce Labs Backpack');
  await expect(inventory.cartBadge).toHaveCount(0);
});
