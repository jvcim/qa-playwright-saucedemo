import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { users } from '../utils/test-data';

test.describe('Autenticação', () => {
  test('TC-AUTH-001 @smoke login válido abre inventário', async ({ page }) => {
    const login = new LoginPage(page);
    await login.open();
    await login.login(users.standard.username, users.standard.password);
    await expect(page).toHaveURL(/\/inventory\.html$/);
    await expect(page.locator('.inventory_list')).toBeVisible();
  });

  test('TC-AUTH-002 @regression senha inválida mostra erro', async ({ page }) => {
    const login = new LoginPage(page);
    await login.open();
    await login.login(users.standard.username, 'wrong-password');
    await expect(login.error).toContainText('Username and password do not match');
  });

  test('TC-AUTH-003 @regression usuário não informado é obrigatório', async ({ page }) => {
    const login = new LoginPage(page);
    await login.open();
    await login.login('', users.standard.password);
    await expect(login.error).toContainText('Username is required');
  });

  test('TC-AUTH-004 @regression senha não informada é obrigatória', async ({ page }) => {
    const login = new LoginPage(page);
    await login.open();
    await login.login(users.standard.username, '');
    await expect(login.error).toContainText('Password is required');
  });

  test('TC-AUTH-005 @regression usuário bloqueado não entra', async ({ page }) => {
    const login = new LoginPage(page);
    await login.open();
    await login.login(users.locked.username, users.locked.password);
    await expect(login.error).toContainText('locked out');
  });

  test('TC-AUTH-006 @smoke logout retorna à tela de login', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    await login.open();
    await login.login(users.standard.username, users.standard.password);
    await inventory.logout();
    await expect(page).toHaveURL(/\/$/);
    await expect(login.loginButton).toBeVisible();
  });
});
