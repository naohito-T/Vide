/**
 * @desc firebase接続のerror handler
 * SSRで実行されるためconsole.errorを出すしかない。
 * 自動でerror pageへリダイレクトされるのはCSRの場合だけ
 */
import type {
  ExecHandlerError,
  ErrorHandler,
  ConditionErrorHandler
} from '@/lib/types/error';
import { FirebaseError, FirebaseStorageError } from './errorsClass';

const execFirebaseError: ExecHandlerError = (error, _) => {
  console.error(error);
};

export const isFirebaseError: ConditionErrorHandler = (error: unknown) => {
  return error instanceof FirebaseError;
};

export const firebaseErrorHandler: ErrorHandler = {
  condition: isFirebaseError,
  exec: execFirebaseError
};

/**
 * firebase Storage Error
 */
const execFirebaseStorageError: ExecHandlerError = (error, _) => {
  console.error(error);
};

export const isFirebaseStorageError: ConditionErrorHandler = (
  error: unknown
) => {
  return error instanceof FirebaseStorageError;
};

export const firebaseStorageErrorHandler: ErrorHandler = {
  condition: isFirebaseStorageError,
  exec: execFirebaseStorageError
};
