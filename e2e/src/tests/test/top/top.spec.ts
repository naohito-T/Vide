import test from '@/tests/fixture';
import { expect } from '@playwright/test';
import { TopPage } from '@/tests/pages/top';

test.describe('/ page test', () => {
  test('top Pageに遷移ができるか', async ({ page }) => {
    const topPage = new TopPage(page);
    await topPage.navigate();
    expect(topPage.isCurrentPage).toBe(true);
  });

  test('レスポンシブチェック', async ({ page }) => {
    const topPage = new TopPage(page);
    await topPage.navigate();

    await topPage.getSpecifiedDeviceScreenshot(topPage.getCurrentPage, 'top', 'iPhone SE');
    await topPage.getSpecifiedDeviceScreenshot(topPage.getCurrentPage, 'top', 'Pixel 5');
    await topPage.getSpecifiedDeviceScreenshot(topPage.getCurrentPage, 'top', 'iPad Mini');
    await topPage.getSpecifiedDeviceScreenshot(topPage.getCurrentPage, 'top', 'Desktop Chrome');
  });
});
