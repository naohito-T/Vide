/** @desc 数字を拒否する */
export const rejectNumber = (str: string): boolean => {
  return /[^0-9]+/.test(str);
};
