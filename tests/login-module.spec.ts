import {test, expect} from '../fixtures/hooks-fixture';
import loginModuleData from '../data/login-module-data.json';

test.use({storageState: {
    cookies: [],
    origins: []
}
});

test('[Login] Verify that the user cannot log in with invalid password',{
    tag:['@UI','@UAT'],
    annotation:{
        type: 'Test Case Link',
        description: 'url for jira ticket'
    }
}, async ({gotoUrl, loginPage, commonUtils}) => {
    const username = commonUtils.decryptData(process.env.USER_NAME!);
    await loginPage.login(username, loginModuleData.wrong_password);
    await expect(loginPage.loginErrorMessage).toHaveText(loginModuleData.invalid_credentials_text);
    await expect(loginPage.userNameInput).toBeVisible();
});

test.describe('Invalid Login Tests',{
    tag:['@UI','@UAT'],
    annotation:{
        type: 'Story Link',
        description: 'Link of Story'
    }
}, () => {
    test('[Login] Verify that the user cannot log in with invalid username',{
    tag:['@UI','@UAT'],
    annotation:{
        type: 'Test Case Link',
        description: 'url for jira ticket'
    }
}, async ({gotoUrl, loginPage, commonUtils}) => {
    const password = commonUtils.decryptData(process.env.USER_PASSWORD!);
    await loginPage.login(loginModuleData.wrong_username, password);
    await expect(loginPage.loginErrorMessage).toHaveText(loginModuleData.invalid_credentials_text);
    await expect(loginPage.userNameInput).toBeVisible();
});


test('[Login] Verify that the user cannot log in with invalid username and invalid password',{
    tag:['@UI','@DEV'],
    annotation:{
        type: 'Test Case Link',
        description: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    }
}, async ({gotoUrl, loginPage, commonUtils}) => {
    await loginPage.login(loginModuleData.wrong_username, loginModuleData.wrong_password);
    await expect(loginPage.loginErrorMessage).toHaveText(loginModuleData.invalid_credentials_text);
    await expect(loginPage.userNameInput).toBeVisible();
});

});  

test('[Login] Verify that the user can log in with valid credentials',{
    tag:['@VISUAL','@UAT'],
    annotation:{
        type: 'Test Case Link',
        description: 'url for jira ticket'
    }
}, async ({gotoUrl, loginPage, commonUtils, leftSidePanelPage}) => {
    const username = commonUtils.decryptData(process.env.USER_NAME!);
    const password = commonUtils.decryptData(process.env.USER_PASSWORD!);
    await loginPage.login(username, password);
    await expect(leftSidePanelPage.orangeHRMLogo).toHaveScreenshot('orangeHRM-logo.png');
    await expect(leftSidePanelPage.sidePanel).toHaveScreenshot('left-side-panel.png');
});