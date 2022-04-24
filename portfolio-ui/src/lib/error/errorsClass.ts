/**
 * @desc 独自のerrorを作成したいとき
 */

export class NullPointerError extends Error {
  constructor(selecter: string) {
    super(`Null pointer ${selecter}`);
  }
}

export class UndefinedError extends Error {
  constructor() {
    super('Cannot execute process due to undefined.');
  }
}
