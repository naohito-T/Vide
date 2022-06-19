import test from '@/tests/fixture';
import { expect } from '@playwright/test';
import { SkillsPage } from '@/tests/pages/skills';

test.describe('/skills page test', () => {
  test('スキル Pageに遷移ができるか', async ({ page }) => {
    const skillsPage = new SkillsPage(page);
    await skillsPage.navigate();
    expect(skillsPage.isCurrentPage).toBe(true);
  });

  test('レスポンシブチェック', async ({ page }) => {
    const skillsPage = new SkillsPage(page);
    await skillsPage.navigate();

    await skillsPage.getSpecifiedDeviceScreenshot(skillsPage.getCurrentPage, 'skills', 'iPhone SE');
    await skillsPage.getSpecifiedDeviceScreenshot(skillsPage.getCurrentPage, 'skills', 'Pixel 5');
    await skillsPage.getSpecifiedDeviceScreenshot(skillsPage.getCurrentPage, 'skills', 'iPad Mini');
    await skillsPage.getSpecifiedDeviceScreenshot(skillsPage.getCurrentPage, 'skills', 'Desktop Chrome');
  });
});
