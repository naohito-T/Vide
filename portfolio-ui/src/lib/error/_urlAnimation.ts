/**
 * @desc Error? URLAnimationを Rejectする
 */
import type {
  ExecHandlerError,
  ErrorHandler,
  ConditionErrorHandler
} from '@/lib/types/error';
import { URLAnimationReject } from './errorsClass';

/** @desc URLAnimationか*/
export const isURLAnimationReject: ConditionErrorHandler = (error: unknown) => {
  return error instanceof URLAnimationReject;
};

const execURLAnimationReject: ExecHandlerError = (message) => {
  console.log(message);
};

export const urlAnimationRejectHandler: ErrorHandler = {
  condition: isURLAnimationReject,
  exec: execURLAnimationReject
};
