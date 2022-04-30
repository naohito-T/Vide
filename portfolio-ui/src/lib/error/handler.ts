import type { ComponentInternalInstance } from '@nuxtjs/composition-api';
import type { ErrorHandler } from '@/lib/types';
import { unexpectedErrorHandler } from './_unexpected';
import { firebaseErrorHandler } from './_firebase';
import { urlAnimationRejectHandler } from './_urlAnimation';
import {
  nullPointerErrorHandler,
  undefinedErrorHandler
} from './_nullWithUndefined';

const errorHandlers: ErrorHandler[] = [
  firebaseErrorHandler,
  nullPointerErrorHandler,
  undefinedErrorHandler,
  urlAnimationRejectHandler,
  unexpectedErrorHandler // これは最後にする
];

/**
 * @attention ctxに関してはsetup内からしか呼べない
 * 使い方としてapi接続。別のところではクラスのerrorを履いてキャッチしてここに流す
 */
export const commonErrorHandler = (
  error: unknown,
  ctx: ComponentInternalInstance | null
) => {
  // こいつが最後の砦のため、throwはしない
  if (!ctx) {
    console.warn('CommonErrorHandler: ctxが設定されていないため実行できません');
    return;
  }
  console.log('通ってる？');
  const handler =
    errorHandlers.find((handler) => handler.condition(error)) ??
    unexpectedErrorHandler;
  handler.exec(error, ctx);
};
