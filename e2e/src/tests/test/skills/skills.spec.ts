import test from '@/tests/fixture';
import { expect } from '@playwright/test';
import { SkillsPage } from '@/tests/pages/skills';

test.describe('/skills page test', () => {
  test('スキル Pageに遷移ができるか', async ({ page }) => {
    const skillsPage = new SkillsPage(page);
    await skillsPage.navigate();
    expect(skillsPage.isCurrentPage).toBe(true);
  });
});
