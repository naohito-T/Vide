import type { Page } from 'playwright';
import { BasePageModel } from '@/tests/pages/_basePage';

/**
 * @desc works page
 */
export class WorksPage extends BasePageModel {
  constructor(page: Page) {
    super(page, '/works');
  }
}
