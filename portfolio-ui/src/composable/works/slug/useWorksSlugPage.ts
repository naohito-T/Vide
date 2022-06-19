import { useContext, computed, InjectionKey } from '@nuxtjs/composition-api';
import type { ComponentInternalInstance } from '@nuxtjs/composition-api';
import { NullPointerError, NotSlugError } from '@/lib/error';
import { csrLoading } from '@/lib/loading';

const findHasSlug = (slug: string) => {
  switch (slug) {
    case '/works/yduringy':
    case '/works/motion':
    case '/works/jacket':
      return true;
    // slugが見つからない
    default:
      return false;
  }
};

export const useWorksSlugPage = (
  instance: ComponentInternalInstance | null
) => {
  if (!instance) {
    throw new NullPointerError('Not Context');
  }
  const { timeoutID } = csrLoading(instance);
  const { route } = useContext();
  const slug = computed(() => route.value.path);
  const hasSlug = computed(() => findHasSlug(slug.value));

  if (!hasSlug.value) {
    throw new NotSlugError();
  }

  return {
    slug,
    timeoutID
  };
};

// type
export type UseWorksSlugPageType = ReturnType<typeof useWorksSlugPage>;

// key
export const UseWorksSlugPageTypeKey: InjectionKey<UseWorksSlugPageType> =
  Symbol('useWorksSlugPage');
