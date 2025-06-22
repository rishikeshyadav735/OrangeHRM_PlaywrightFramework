import { Locator, Page } from "@playwright/test";

export class LoginPage{
    readonly page: Page;
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly loginErrorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userNameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.loginErrorMessage = page.getByRole('alert');
    }   

    /**
     * Navigates to the login page of OrangeHRM.
     */
    async gotoUrl() {
        await this.page.goto(`${process.env.BASE_URL}/web/index.php/auth/login`);
    }

    /**
     * Logs in to OrangeHRM with the provided username and password.
     * @param username - The username to log in with.
     * @param password - The password to log in with.
     */
    async login(username: string, password: string) {
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

}