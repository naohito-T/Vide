import { InjectionKey } from '@nuxtjs/composition-api';
import type { ComponentInternalInstance } from '@nuxtjs/composition-api';
import { NullPointerError } from '@/lib/error';
import { csrLoading } from '@/lib/loading';

export const useTimelinePage = (instance: ComponentInternalInstance | null) => {
  if (!instance) {
    throw new NullPointerError('Not Context');
  }
  const { timeoutID } = csrLoading(instance);

  return {
    timeoutID
  };
};

// type
export type UseTimelinePageType = ReturnType<typeof useTimelinePage>;

// key
export const UseTimelinePageTypeKey: InjectionKey<UseTimelinePageType> =
  Symbol('useTimelinePage');
