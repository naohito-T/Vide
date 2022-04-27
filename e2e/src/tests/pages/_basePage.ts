import type { Page, Response, BrowserContext } from 'playwright';
import { Config } from '@/config';
import { NextPage, NextNewTabPage } from '@/types';

/**
 * @desc 全てのPage オブジェクトでこのModelを継承する
 *       基本運用としてはBaseにmethodをまとめる。
 *       各Pageでしか使わないものは各Page classで定義する
 */
export abstract class BasePageModel {
  protected readonly page: Page;

  protected readonly path: string;

  protected readonly config: Config;

  constructor(page: Page, path: string) {
    this.config = new Config();
    this.page = page;
    this.path = `${this.config.frontURL}${path}`;
  }

  /** @desc 指定のpageを開く */
  public async navigate(): Promise<Response | null> {
    return this.page.goto(this.path);
  }

  /** @desc 要素をクリックしnext Pageに遷移するまで待機する */
  public async navigateClickLoad(page: Page, selector: string, url?: string): Promise<Response | null> {
    if (url) {
      const [nextPage] = await Promise.all([page.waitForNavigation({ url }), page.click(selector)]);
      return nextPage;
    } else {
      const [nextPage] = await Promise.all([page.waitForNavigation(), page.click(selector)]);
      return nextPage;
    }
  }

  /** @desc 要素をクリックし別タブウィンドウに遷移するまで待機する */
  public async navigateClickNewTab(page: Page, context: BrowserContext, selector: string): Promise<Page> {
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.locator(selector).click(), // Opens a new tab
    ]);
    await newPage.waitForLoadState();
    return newPage;
  }

  /** @desc inputにtextを入力する */
  public async fillText(page: Page, selector: string, input: string): Promise<void> {
    await page.locator(selector).click();
    await page.locator(selector).fill(input);
  }

  /** @desc 指定ミリ秒待機させる */
  public async waitTime(page: Page, time = 2000): Promise<void> {
    await page.waitForTimeout(time);
  }

  /** @desc button text整形 */
  public buttonText(text: string): string {
    return `button:has-text("${text}")`;
  }

  /** @desc ariaLabel text整形 */
  public ariaLabelText(text: string): string {
    return `[aria-label="${text}"]`;
  }

  /** @desc 現在表示中のpageとpathが相違ないか */
  public get isCurrentPage(): boolean {
    return this.page.url() === this.path;
  }

  /** @desc 現在表示中のpageを返す */
  public get getCurrentPage(): Page {
    return this.page;
  }

  /** @desc フロントテスト対象のURLを返す */
  public get getFrontRunURL(): string {
    return this.config.frontURL;
  }
}
