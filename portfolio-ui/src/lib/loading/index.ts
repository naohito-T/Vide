import {
  ComponentInternalInstance,
  onMounted,
  ref,
  InjectionKey
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
    console.log(`hahahahahaha${instance}`);
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

/** state */
export const useLoading = () => {
  const isLoading = ref(false);
  const start = () => (isLoading.value = true);
  const finish = () => (isLoading.value = false);
  return { isLoading, start, finish };
};

export type UseLoadingType = ReturnType<typeof useLoading>;

// key
export const LoadingKey: InjectionKey<UseLoadingType> = Symbol('UseLoading');
