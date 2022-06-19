import { ErrorDictionary } from '@/lib/types';
/**
 * @desc フロントエンド言語切り替え
 *       あのrubyのサイトを見て作成予定
 *       言語切り替えも対応できるように
 */

export const jaErrorMessages: ErrorDictionary = new Map([
  [
    '401',
    {
      title: 'ログインが必要です',
      description:
        '長期間操作されなかった、もしくは別の場所でログアウトが行われました。'
    }
  ],
  [
    '404',
    {
      title: '404 Not Found',
      description: 'お探しのページは見つかりませんでした。'
    }
  ],
  [
    '503',
    {
      title: 'WIP This Page',
      description: 'Please return to top page'
    }
  ],
  [
    'default',
    {
      title: '予期せぬエラーが発生しました',
      description: 'トップページへお戻りください。'
    }
  ],
  [
    'email_duplication',
    {
      title: 'このメールアドレスはすでに使われています',
      description: 'トップページへお戻りください。'
    }
  ],
  [
    'provider_duplication',
    {
      title: 'このアカウントは使用中です',
      description: 'このアカウントは既に使用中の為、連携できませんでした。'
    }
  ],
  [
    'unauthorized',
    {
      title: 'タイムアウトエラー',
      description:
        '長時間操作が行われなかったため、タイムアウトエラーが発生しました。再度ログインから実行してください。'
    }
  ]
]);
