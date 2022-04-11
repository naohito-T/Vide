/**
 * @see https://zenn.dev/nnt/articles/3a2e46587d1a97
 */
import type { ComponentInternalInstance } from '@nuxtjs/composition-api';

// これがsetup内で使えるやつ
// getCurrentInstance

/**
 * @desc エラー処理を行う条件
 */
type ConditionErrorHandler = (error: unknown) => boolean;

/**
 * @desc error処理を行うハンドラ
 */
type ExecHandlerError = (
  error: unknown,
  ctx: ComponentInternalInstance
) => void;

/**
 * @desc エラー条件とハンドラの組み合わせ
 */
type ErrorHandler = {
  condition: ConditionErrorHandler;
  exec: ExecHandlerError;
};

export type { ExecHandlerError, ConditionErrorHandler, ErrorHandler };
