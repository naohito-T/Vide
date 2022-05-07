import {
  useFetch,
  InjectionKey,
  useContext,
  ref,
  reactive
} from '@nuxtjs/composition-api';
import type { ComponentInternalInstance } from '@nuxtjs/composition-api';
import { NullPointerError } from '@/lib/error';
import { csrLoading } from '@/lib/loading';
import { AboutPageProject } from '@/lib/types';

export const useAboutPage = (instance: ComponentInternalInstance | null) => {
  if (!instance) {
    throw new NullPointerError('Not Context');
  }
  const { app } = useContext();
  const { timeoutID } = csrLoading(instance);
  // const imgState = ref<string[] | null>([]);
  const projectState = reactive<{ projects: AboutPageProject[] }>({
    projects: []
  });

  useFetch(async () => {
    // img urlが欲しいとき
    // imgState.value = await app.$stores.home.fetchDownloadURLs('about');
    projectState.projects = (await app.$stores.home.fetchDocumentAllInFireStore(
      'about',
      'created_at'
    )) as AboutPageProject[];
  });

  return {
    timeoutID,
    // imgState,
    projectState
  };
};

// type
export type UseAboutPageType = ReturnType<typeof useAboutPage>;

// key
export const UseAboutPageTypeKey: InjectionKey<UseAboutPageType> =
  Symbol('useAboutPage');
