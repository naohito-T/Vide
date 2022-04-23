import type { ComponentInternalInstance } from '@nuxtjs/composition-api';
import type { ErrorHandler } from '@/lib/types';
import { unexpectedErrorHandler } from './_unexpected';
import { nullPointerErrorHandler, undefinedErrorHandler } from './_nullPointer';

const errorHandlers: ErrorHandler[] = [
  unexpectedErrorHandler,
  nullPointerErrorHandler,
  undefinedErrorHandler
];

/**
 * @attention ctxに関してはsetup内からしか呼べない
 * 使い方としてapi接続の時はこれはをよぶ。別のところではクラスのerrorを履いてキャッチしてここに流す
 */
export const commonErrorHandler = (
  error: unknown,
  ctx: ComponentInternalInstance
) => {
  console.log('commonErrorHandlerに飛んでるぜ');
  const handler =
    errorHandlers.find((handler) => handler.condition(error)) ??
    unexpectedErrorHandler;
  handler.exec(error, ctx);
};
