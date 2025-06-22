import {test, expect} from '../fixtures/hooks-fixture';
import pimData from '../data/pim-module-data.json';


test('[PIM] Verify that the user can add a new employee under the PIM module',{
    tag:['@UI','@UAT'],
    annotation:{
        type: 'Test Case Link',
        description: 'url for jira ticket'
    }
}, async ({gotoUrl, leftSidePanelPage, pimPage, commonUtils}) => {

    await test.step("Open the PIM page", async () => {
        await leftSidePanelPage.openPIMPage();
    });

    await test.step("Add a new employee in PIM Module", async () => {
        await pimPage.addEmployee(pimData.firstName, pimData.middleName, pimData.lastName);
        await expect(pimPage.newEmployeeNameHeading).toHaveText(`${pimData.firstName} ${pimData.lastName}`);

    });
  
 
});