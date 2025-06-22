import { Locator, Page } from "@playwright/test";

export class PIMPage {
  readonly page: Page;
  readonly addPIMButton: Locator;
  readonly firstNameTextBox: Locator;
  readonly middleNameTextBox: Locator;
  readonly lastNameTextBox: Locator;
  readonly saveButton: Locator;
  readonly newEmployeeNameHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addPIMButton = page.getByRole('button', { name: ' Add' });
    this.firstNameTextBox = page.locator('input[name="firstName"]');
    this.middleNameTextBox = page.locator('input[name="middleName"]');
    this.lastNameTextBox = page.locator('input[name="lastName"]');
    this.saveButton = page.locator('button[type="submit"]');
    this.newEmployeeNameHeading = page.locator('h6[class="oxd-text oxd-text--h6 --strong"]');

 
  }


  /**
   * Adds a new employee with the provided first name, middle name, and last name.
   * @param firstName - The first name of the employee.
   * @param middleName - The middle name of the employee.
   * @param lastName - The last name of the employee.
   */
  async addEmployee(firstName: string, middleName: string, lastName: string) {
    await this.addPIMButton.click();
    await this.firstNameTextBox.fill(firstName);
    await this.middleNameTextBox.fill(middleName);
    await this.lastNameTextBox.fill(lastName);
    await this.saveButton.click();
    await this.page.waitForLoadState('networkidle');
    }
}