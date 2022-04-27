import test from '@/tests/fixture';
import { expect } from '@playwright/test';
import { WorksPage } from '@/tests/pages/works';

test.describe('/works page test', () => {
  test('ワーク一覧 Pageに遷移ができるか', async ({ page }) => {
    const worksPage = new WorksPage(page);
    await worksPage.navigate();
    expect(worksPage.isCurrentPage).toBe(true);
  });
});
