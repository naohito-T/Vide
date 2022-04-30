/**
 * @desc Storage
 *   SessionStorage : 別タブだと有効ではない。同タブだとリロードしても保存されている
 */

/** @desc sessionStorageからitemを取得する */
export const getSessionItem = (keyName: string): string | null => {
  const item = sessionStorage.getItem(keyName);
  return item;
};

/** @desc sessionStorageにキーと値を追加 */
export const setSessionItem = (keyName: string, keyValue: string): void => {
  sessionStorage.setItem(keyName, keyValue);
};
