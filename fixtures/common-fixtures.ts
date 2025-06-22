import {test as baseTest} from '../fixtures/pom-fixture';
import CommonUtils from '../utils/CommonUtils';

type CommonFixtureType = {
    commonUtils : CommonUtils;
}

export const test = baseTest.extend<CommonFixtureType>({
    commonUtils: async ({}, use) => {
        const commonUtils = new CommonUtils();
        await use(commonUtils);
    }
});