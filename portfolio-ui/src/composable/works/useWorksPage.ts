import { InjectionKey } from '@nuxtjs/composition-api';
import type { ComponentInternalInstance } from '@nuxtjs/composition-api';
import { NullPointerError } from '@/lib/error';
import { csrLoading } from '@/lib/loading';

export const useWorksPage = (instance: ComponentInternalInstance | null) => {
  if (!instance) {
    throw new NullPointerError('Not Context');
  }
  const { timeoutID } = csrLoading(instance);

  return {
    timeoutID
  };
};

// type
export type UseWorksPageType = ReturnType<typeof useWorksPage>;

// key
export const UseWorksPageTypeKey: InjectionKey<UseWorksPageType> =
  Symbol('useWorksPage');
