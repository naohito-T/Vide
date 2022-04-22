/**
 * @desc 渡された要素のデータ型の配列を作成する。(countで個数指定可能)
 * @return {Array<T>}
 */
export const arrayFactorys = <T extends Object>(
  entity: T,
  count: number
): Array<T> => {
  const entitys: Array<T> = [];
  for (let i = 0; i < count; i++) {
    entitys.push(entity);
  }
  return entitys;
};

/**
 * @desc randomな文字列を生成する
 * @return {string}
 */
export const randomString = () => {
  return Math.random().toString(32).substring(2);
};

/**
 * @desc 文字列を一文字ずつ分解し配列に格納し返す。
 * @return {string[]}
 */
export const strToCharacters = (str: string): string[] => {
  return [...str];
};
