/**
 * @desc DOM関連
 * @see https://jpdebug.com/p/2473875
// Vue.js でテンプレート内の DOM 要素や子コンポーネントの参照は、旧来の Options API だと this.$refs で取得できました。
// では、Composition API ではどうなっているのでしょうか。
 */
import { NullPointerError } from '@/lib/error';

/** @desc dom selector */
export const domSelect = (s: string): Element => {
  const dom = document.querySelector(s);
  if (!dom) {
    console.log('domがnull');
    throw new NullPointerError(s);
  }
  return dom;
};

/** @desc */
export const domSelectAll = (s: string): NodeListOf<Element> => {
  const doms = document.querySelectorAll(s);
  if (!doms) {
    throw new NullPointerError(s);
  }
  return doms;
};

/** @desc 対象の要素にクラスを追加する */
export const addClassName = (selector: Element | null, className: string) => {
  if (!selector) {
    throw new NullPointerError('domがNULLです');
  }
  selector.classList.add(className);
};

/** @desc 対象要素のクラスを削除する */
export const removeClassName = (
  selector: Element | null,
  className: string
) => {
  if (!selector) {
    throw new NullPointerError('domがNULLのため削除ができません');
  }
  selector.classList.remove(className);
};

/** @desc 要素のクラス一覧を取得する */
export const getClassList = (selector: Element | null): DOMTokenList => {
  if (!selector) {
    throw new NullPointerError('domがNULLのためClass一覧が取得できません');
  }
  return selector.classList;
};
