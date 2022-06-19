/**
 * @desc 時間関連Utils
 */

/** @desc YYYY-MM-DDに変換する */
export const formatDate = (dt: Date) => {
  const y = dt.getFullYear();
  const m = ('00' + (dt.getMonth() + 1)).slice(-2);
  const d = ('00' + dt.getDate()).slice(-2);
  return y + '-' + m + '-' + d;
};

/** @desc YYYY-MM-DDの差分を出力 */
export const getDateDiff = (dateString1: string, dateString2: string) => {
  // 日付を表す文字列から日付オブジェクトを生成
  const date1 = new Date(dateString1);
  const date2 = new Date(dateString2);
  // 2つの日付の差分（ミリ秒）を計算
  const msDiff = date1.getTime() - date2.getTime();
  // 求めた差分（ミリ秒）を日付に変換
  // 差分÷(1000ミリ秒×60秒×60分×24時間)
  return Math.ceil(msDiff / (1000 * 60 * 60 * 24));
};
