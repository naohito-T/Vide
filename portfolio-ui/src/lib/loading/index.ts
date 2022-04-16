import {
  ComponentInternalInstance,
  onMounted,
  ref
} from '@nuxtjs/composition-api';

/**
 * @desc client rendringで使うloading
 * @see https://nuxtjs.org/docs/features/loading/
 */
export const csrLoading = (
  instance: ComponentInternalInstance | null,
  time: number = 1500
) => {
  if (!instance) {
    throw new Error(`Should be used in setup().`);
  }
  const timeoutID = ref(0);
  onMounted(() => {
    // .$nextTickは、DOMを更新後、その更新済みのDOMに対して何らかの処理をすることが可能です。
    instance?.proxy.$nextTick(() => {
      instance?.proxy.$nuxt.$loading.start();
      timeoutID.value = window.setTimeout(
        () => instance?.proxy.$nuxt.$loading.finish(),
        time
      );
    });
  });

  return { timeoutID };
};
