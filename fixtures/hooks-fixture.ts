import {test as baseTest} from './common-fixtures';

type HooksFixturesType = {
    gotoUrl : any;
    logOut : any;
} 

export const test = baseTest.extend<HooksFixturesType>({
    gotoUrl: async ({ loginPage }, use) => {
        await loginPage.gotoUrl();
        await use();
    },
    logOut: async ({ userPage }, use) => {
        await use();
        await userPage.logOut();
    }
})

export { expect } from '@playwright/test';