import { test as base } from '@playwright/test';

/**
 * @desc Playwright test method 拡張
 */

interface TeamsTexts {
  teamsTexts: string[];
}

/**
 * @desc ここで拡張すれば全page moduleで共通変数が使用できます。
 */
const test = base.extend<TeamsTexts>({
  teamsTexts: [],
});

export default test;
