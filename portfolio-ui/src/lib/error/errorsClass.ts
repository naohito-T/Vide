/**
 * @desc 独自のerrorを作成したいとき
 */

export class NullPointerError extends Error {
  constructor() {
    super('null pointer');
  }
}

export class UndefinedError extends Error {
  constructor() {
    super('Cannot execute process due to undefined.');
  }
}
