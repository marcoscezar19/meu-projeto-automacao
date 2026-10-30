import { test, expect } from '../fixtures/auth.fixture';

test.describe('Área Restrita - Validação de Sessão', () => {
  test('Deve iniciar direto na área restrita utilizando a fixture de sessão', async ({ dashboardPage }) => {
    await expect(dashboardPage.pageTitle).toBeVisible();
    await expect(dashboardPage.navMenu).toBeVisible();
  });
});