import type { Page } from 'playwright';
import { BasePageModel } from '@/tests/pages/_basePage';

/**
 * @desc Skills Page
 */
export class SkillsPage extends BasePageModel {
  constructor(page: Page) {
    super(page, '/');
  }
}
