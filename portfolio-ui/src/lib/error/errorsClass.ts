/**
 * @desc 独自のerrorを作成したいとき
 * 以下はhttp error コード一覧
 * @see https://www.itmanage.co.jp/column/http-www-request-response-statuscode/
 */
import type { StorageError } from 'firebase/storage';

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

export class NotSlugError extends Error {
  constructor() {
    super('Not Slug Page');
  }
}

export class FirebaseError extends Error {
  constructor() {
    super(`Firebase connection Error.`);
  }
}

export class FirebaseStorageError extends Error {
  constructor(errorCode: StorageError) {
    super(
      `Firebase Storage Error ${FirebaseStorageError.generateErrorCode(
        errorCode
      )}`
    );
  }

  /**
   * @TODO これいるか？
   * @see https://firebase.google.com/docs/storage/web/download-files?hl=ja
   */
  private static generateErrorCode = (errorCode: StorageError) => {
    switch (errorCode.code) {
      case 'storage/object-not-found':
        // File doesn't exist
        return errorCode.code;
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        return errorCode.code;
      case 'storage/canceled':
        // User canceled the upload
        return errorCode.code;
      case 'storage/unknown':
        // Unknown error occurred, inspect the server response
        return errorCode.code;
      default:
        return errorCode.code;
    }
  };
}

export class URLAnimationReject extends Error {
  constructor() {
    super(`URLAnimation Reject.`);
  }
}
