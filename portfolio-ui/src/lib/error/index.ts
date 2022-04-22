import { unexpectedErrorHandler } from './unexpected';
import type { ComponentInternalInstance } from '@nuxtjs/composition-api';
import type { ErrorHandler } from '@/lib/types';

const errorHandlers: ErrorHandler[] = [unexpectedErrorHandler];

/**
 * @attention ctxに関してはsetup内からしか呼べない
 */
export const commonErrorHandler = (
  error: unknown,
  ctx: ComponentInternalInstance
) => {
  const handler =
    errorHandlers.find((handler) => handler.condition(error)) ??
    unexpectedErrorHandler;
  handler.exec(error, ctx);
};
