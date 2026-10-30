import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

type MyFixtures = {
  dashboardPage: DashboardPage;
};

export const test = base.extend<MyFixtures>({
  dashboardPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    // Executa o fluxo de autenticação antes de entregar o teste na área logada
    await loginPage.navigate();
    await loginPage.login('customer@practicesoftwaretesting.com', 'welcome01');

    // Disponibiliza a página pronta para o teste
    await use(dashboardPage);
  },
});

export { expect } from '@playwright/test';