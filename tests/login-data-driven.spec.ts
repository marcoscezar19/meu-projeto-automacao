import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { listaUsuarios } from '../data/usuarios.data';

test.describe('Autenticação - Data-Driven Testing', () => {
  for (const cenario of listaUsuarios) {
    test(`CT - Login: ${cenario.descricao}`, async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.navigate();
      await loginPage.login(cenario.usuario, cenario.senha);

      if (cenario.sucesso) {
        await expect(page).toHaveURL(/.*\/account/);
      } else {
        await expect(loginPage.getErrorMessage()).toBeVisible();
        if (cenario.mensagemEsperada) {
          await expect(loginPage.getErrorMessage()).toContainText(cenario.mensagemEsperada);
        }
      }
    });
  }
});