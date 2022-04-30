/**
 * @desc 独自のerrorを作成したいとき
 * 以下はhttp error コード一覧
 * @see https://www.itmanage.co.jp/column/http-www-request-response-statuscode/
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

export class FirebaseError extends Error {
  constructor() {
    super(`Firebase connection Error.`);
  }
}

export class URLAnimationReject extends Error {
  constructor() {
    super(`URLAnimation Reject.`);
  }
}
