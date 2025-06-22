import { Locator, Page } from "@playwright/test";


export class LeftSidePanelPage {
  readonly page: Page;
  readonly pimLink: Locator;
  readonly orangeHRMLogo: Locator;
  readonly sidePanel: Locator;


  constructor(page: Page) {
    this.page = page;
    this.pimLink = page.getByRole('link', { name: 'PIM' });
    this.orangeHRMLogo = page.getByRole('link', { name: 'client brand banner' });
    this.sidePanel = page.locator('div.oxd-sidepanel-body');

  }

  async openPIMPage() {
    // Click on the PIM link in the left side panel
    await this.pimLink.click();
    // Wait for the PIM page to load
    await this.page.waitForURL(`${process.env.BASE_URL}/web/index.php/pim/viewEmployeeList`);
  }

}