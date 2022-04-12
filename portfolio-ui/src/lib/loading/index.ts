import { ComponentInternalInstance } from '@nuxtjs/composition-api';
/**
 * @desc client rendringで使うloading
 */

export const csrLoading = (
  instance: ComponentInternalInstance | null,
  time: number = 5000
) => {
  if (!instance) {
    throw new Error(`Should be used in setup().`);
  }
  instance?.proxy.$nuxt.$loading.start();
  setTimeout(() => instance?.proxy.$nuxt.$loading.finish(), time);
};

/**
 *
 */
