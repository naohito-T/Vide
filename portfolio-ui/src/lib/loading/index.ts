import {
  ComponentInternalInstance,
  onMounted,
  ref,
  InjectionKey
} from '@nuxtjs/composition-api';
import { NullPointerError } from '@/lib/error';

/**
 * @desc client rendringで使うloading
 * @see https://nuxtjs.org/docs/features/loading/
 */
export const csrLoading = (
  instance: ComponentInternalInstance | null,
  time: number = 1500
) => {
  if (!instance) {
    throw new NullPointerError(`Should be used in setup().`);
  }
  const timeoutID = ref(0);
  onMounted(() => {
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
