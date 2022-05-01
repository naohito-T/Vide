import {
  useAsync,
  InjectionKey,
  useContext,
  ref
} from '@nuxtjs/composition-api';
import type { ComponentInternalInstance } from '@nuxtjs/composition-api';
import { NullPointerError } from '@/lib/error';
import { csrLoading } from '@/lib/loading';

export const useAboutPage = (instance: ComponentInternalInstance | null) => {
  if (!instance) {
    throw new NullPointerError('Not Context');
  }
  const { app } = useContext();
  const { timeoutID } = csrLoading(instance);
  const imgState = ref<string[] | null>([]);

  useAsync(async () => {
    imgState.value = await app.$stores.home.fetchDownloadURLs('about');
  });

  return {
    timeoutID,
    imgState
  };
};

// type
export type UseAboutPageType = ReturnType<typeof useAboutPage>;

// key
export const UseAboutPageTypeKey: InjectionKey<UseAboutPageType> =
  Symbol('useAboutPage');
