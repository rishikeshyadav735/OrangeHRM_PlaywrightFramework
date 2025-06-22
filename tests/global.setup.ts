import {test} from '../fixtures/common-fixtures';
import {expect}  from '@playwright/test';

test('Global Setup Test for Auto Login', async ({page, loginPage, dashboardPage, commonUtils}) => {

    const decryptedUsername = commonUtils.decryptData(process.env.USER_NAME!);
    const decryptedPassword = commonUtils.decryptData(process.env.USER_PASSWORD!);
    await loginPage.gotoUrl();
    await loginPage.login(decryptedUsername, decryptedPassword);
    await page.waitForURL(process.env.BASE_URL+"/web/index.php/dashboard/index");
    await page.waitForLoadState('networkidle');
    expect(await dashboardPage.dashboardHeader.isVisible()).toBeTruthy();
    await page.context().storageState({ 
        path: './playwright/.auth/.auth.json'
    })

});