import test from '@/tests/fixture';
import { expect, devices } from '@playwright/test';
import { AboutPage } from '@/tests/pages/about';

test.describe('/about page test', () => {
  test('about pageに遷移ができるか', async ({ page }) => {
    const aboutPage = new AboutPage(page);
    await aboutPage.navigate();
    expect(aboutPage.isCurrentPage).toBe(true);
  });

  test('レスポンシブチェック', async ({ page }) => {
    const aboutPage = new AboutPage(page);
    await aboutPage.navigate();

    await aboutPage.getSpecifiedDeviceScreenshot(aboutPage.getCurrentPage, 'about', 'iPhone SE');
    await aboutPage.getSpecifiedDeviceScreenshot(aboutPage.getCurrentPage, 'about', 'Pixel 5');
    await aboutPage.getSpecifiedDeviceScreenshot(aboutPage.getCurrentPage, 'about', 'iPad Mini');
    await aboutPage.getSpecifiedDeviceScreenshot(aboutPage.getCurrentPage, 'about', 'Desktop Chrome');
  });
});
