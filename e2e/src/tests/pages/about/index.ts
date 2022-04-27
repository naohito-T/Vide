import type { Page } from 'playwright';
import { BasePageModel } from '@/tests/pages/_basePage';

/**
 * @desc About Page
 */
export class AboutPage extends BasePageModel {
  constructor(page: Page) {
    super(page, '/');
  }
}
