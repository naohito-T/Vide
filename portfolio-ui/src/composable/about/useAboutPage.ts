import {
  useAsync,
  InjectionKey,
  useContext,
  computed
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

  useAsync(async () => {
    return await app.$stores.home.fetchDownloadURLs('about');
  }, 'about');

  const imageURLs = computed(() => app.$stores.home.fetchDownloadURLs);

  return {
    timeoutID,
    imageURLs
  };
};

// type
export type UseAboutPageType = ReturnType<typeof useAboutPage>;

// key
export const UseAboutPageTypeKey: InjectionKey<UseAboutPageType> =
  Symbol('useAboutPage');
