import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  readonly pageTitle: Locator;
  readonly navMenu: Locator;
  readonly logoutLink: Locator;

  constructor(private page: Page) {
    this.pageTitle = page.locator('[data-test="page-title"]');
    this.navMenu = page.locator('[data-test="nav-menu"]');
    this.logoutLink = page.locator('[data-test="nav-sign-out"]');
  }

  async logout(): Promise<void> {
    await this.navMenu.click();
    await this.logoutLink.click();
  }
}