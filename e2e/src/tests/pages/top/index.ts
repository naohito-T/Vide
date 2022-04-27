import type { Page } from 'playwright';
import { BasePageModel } from '@/tests/pages/_basePage';

/**
 * @desc Top Page
 */
export class TopPage extends BasePageModel {
  constructor(page: Page) {
    super(page, '/');
  }
}
