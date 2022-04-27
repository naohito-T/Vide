import test from '@/tests/fixture';
import { expect } from '@playwright/test';
import { TopPage } from '@/tests/pages/top';

test.describe('/ page test', () => {
  test('top Pageに遷移ができるか', async ({ page }) => {
    const topPage = new TopPage(page);
    await topPage.navigate();
    expect(topPage.isCurrentPage).toBe(true);
  });
});
