/**
 * @desc 未知のerror 500で返す想定
 */
import type { ExecHandlerError, ErrorHandler } from '@/lib/types/error';

const execUnexpectedError: ExecHandlerError = (error, ctx) => {
  // proxyが従来の`this`にあたるコンポーネントインスタンス
  ctx?.proxy.$nuxt.error({ statusCode: 500 });
  throw error;
};

export const unexpectedErrorHandler: ErrorHandler = {
  condition: () => true, // 未知のためtrueを返す
  exec: execUnexpectedError
};
