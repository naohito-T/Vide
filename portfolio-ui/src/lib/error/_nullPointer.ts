/**
 * @desc null or undefined error コンソールerrorにしリカバリーさせる想定
 */
import type {
  ExecHandlerError,
  ErrorHandler,
  ConditionErrorHandler
} from '@/lib/types/error';
import { NullPointerError, UndefinedError } from './error';

/** null pointerか */
export const isNullPointerError: ConditionErrorHandler = (error: unknown) => {
  return error instanceof NullPointerError;
};

/** undefined errorか */
export const isUndefinedError: ConditionErrorHandler = (error: unknown) => {
  return error instanceof UndefinedError;
};

const execUnexpectedError: ExecHandlerError = (error, ctx) => {
  console.warn(error);
};

export const nullPointerErrorHandler: ErrorHandler = {
  condition: isNullPointerError,
  exec: execUnexpectedError
};

export const undefinedErrorHandler: ErrorHandler = {
  condition: isUndefinedError,
  exec: execUnexpectedError
};
