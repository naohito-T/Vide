import test from '@/tests/fixture';
import { expect } from '@playwright/test';
import { AboutPage } from '@/tests/pages/about';

test.describe('/about page test', () => {
  test('about pageに遷移ができるか', async ({ page }) => {
    const aboutPage = new AboutPage(page);
    await aboutPage.navigate();
    expect(aboutPage.isCurrentPage).toBe(true);
  });
});
