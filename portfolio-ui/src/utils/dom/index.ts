/**
 * @desc DOM関連
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
export const addClassName = (selector: Element, className: string) => {
  selector.classList.add(className);
};

/** @desc 対象要素のクラスを削除する */
export const removeClassName = (selector: Element, className: string) => {
  selector.classList.remove(className);
};

/** @desc 要素のクラス一覧を取得する */
export const getClassList = (selector: Element): DOMTokenList => {
  return selector.classList;
};
