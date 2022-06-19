import { NullPointerError } from '@/lib/error';
/**
 * @desc check系の Utils群
 */
export const checkEnv = (key: string) => {
  const env = process.env[key];
  if (!env) {
    throw new NullPointerError(`${key} env empty.`);
  }
  return env;
};
