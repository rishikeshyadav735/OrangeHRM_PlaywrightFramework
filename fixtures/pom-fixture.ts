import {test as baseTest} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { UserPage } from '../pages/UserPage';
import { LeftSidePanelPage } from '../pages/LeftSidePanelPage';
import { PIMPage } from '../pages/PIMPage';

type PomFixturesType = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  userPage: UserPage;
  leftSidePanelPage: LeftSidePanelPage;
  pimPage: PIMPage;

}

export const test =  baseTest.extend<PomFixturesType>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  } ,
  dashboardPage: async ({ page }, use) => {
    const dashboardPage = new DashboardPage(page);
    await use(dashboardPage);
  },
  userPage: async ({ page }, use) => {
    const userPage = new UserPage(page);
    await use(userPage);
  },
  leftSidePanelPage: async ({ page }, use) => {
    const leftSidePanelPage = new LeftSidePanelPage(page);
    await use(leftSidePanelPage);
  },
  pimPage: async ({ page }, use) => {
    const pimPage = new PIMPage(page);
    await use(pimPage);
  }
})