import { Locator, Page } from "@playwright/test";


export class DashboardPage {
    readonly page: Page;
    readonly dashboardHeader: Locator;
    readonly welcomeMessage: Locator;
    readonly userProfileIcon: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dashboardHeader = page.getByRole('heading', { name: 'Dashboard' });
        this.welcomeMessage = page.getByText('Welcome to OrangeHRM');
        this.userProfileIcon = page.getByRole('listitem').filter({ hasText: 'Admin Admin' }).locator('i');
        this.logoutButton = page.getByRole('menuitem', { name: 'Logout' });

    }

    async logOut() {
        // Click on the user profile icon
        await this.userProfileIcon.click();
        // Wait for the logout button to be visible
        await this.logoutButton.waitFor({ state: 'visible' });
        // Click on the logout button
        await this.logoutButton.click();
    }

    

}