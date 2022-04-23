/**
 * @desc DOM関連
 */

/** @desc dom selector */
export const domSelect = (s: string): Element | null =>
  document.querySelector(s);

/** @desc */
export const domSelectAll = (s: string): NodeListOf<Element> =>
  document.querySelectorAll(s);
