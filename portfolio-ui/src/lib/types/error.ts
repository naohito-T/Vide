/**
 * @desc error handler types
 * @see https://zenn.dev/nnt/articles/3a2e46587d1a97
 */
import type { ComponentInternalInstance } from '@nuxtjs/composition-api';

/**
 * @desc localeで使う群
 */
type ErrorMessage = {
  title: string;
  description: string;
};

type ErrorMessageCode =
  | '401'
  | '404'
  | 'default'
  | 'email_duplication'
  | 'provider_duplication'
  | 'unauthorized';

type ErrorDictionary = Map<ErrorMessageCode, ErrorMessage>;

/** @desc エラー処理を行う条件 */
type ConditionErrorHandler = (error: unknown) => boolean;

/** @desc error処理を行うハンドラ */
type ExecHandlerError = (
  error: unknown,
  ctx: ComponentInternalInstance
) => void;

/** @desc エラー条件とハンドラの組み合わせ */
type ErrorHandler = {
  condition: ConditionErrorHandler; // 検証
  exec: ExecHandlerError; // 実行
};

export type {
  ExecHandlerError,
  ConditionErrorHandler,
  ErrorHandler,
  ErrorMessageCode,
  ErrorMessage,
  ErrorDictionary
};
