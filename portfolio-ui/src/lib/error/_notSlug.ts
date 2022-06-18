import type {
  ExecHandlerError,
  ErrorHandler,
  ConditionErrorHandler
} from '@/lib/types/error';
import { NotSlugError } from './errorsClass';

/** @desc NotSlugErrorか*/
export const isNotSlugError: ConditionErrorHandler = (error: unknown) => {
  return error instanceof NotSlugError;
};

const execNotSlugError: ExecHandlerError = (error, ctx) => {
  ctx?.proxy.$nuxt.error({ statusCode: 503 });
  // throw error;
};

export const notSlugErrorHandler: ErrorHandler = {
  condition: isNotSlugError,
  exec: execNotSlugError
};
