import { expect } from '@playwright/test';
import {test} from '../fixtures/hooks-fixture';
import { UserPage } from '../pages/UserPage';

// test.beforeEach('Before Each Test',async ({loginPage}) => {
//     // Navigate to the login page before each test
//     await loginPage.gotoUrl();
// });

// test.afterEach('After Each Test', async({userPage})=> {
 
//     await userPage.logOut();
// });

test('Login to OrangeHRM', async ({page, gotoUrl}) => {    
  
    // console.log(process.env.BASE_URL);
    // console.log(process.env.USER_NAME);
    // console.log(process.env.USER_PASSWORD);

    // const decryptedUsername = commonUtils.decryptData(process.env.USER_NAME!);
    // const decryptedPassword = commonUtils.decryptData(process.env.USER_PASSWORD!);
    console.log(await page.title());


}); 

test('Check if the page title is correct 1', async ({page, gotoUrl}) => {
    // Check if the page title is correct
    await expect(page).toHaveTitle('OrangeHRM');
   
});

test('Check if the page title is correct 2', async ({page, gotoUrl, logOut}) => {
    // Check if the page title is correct
    await expect(page).toHaveTitle('OrangeHRM');
});