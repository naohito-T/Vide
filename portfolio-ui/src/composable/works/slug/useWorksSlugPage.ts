import { useContext, computed, InjectionKey } from '@nuxtjs/composition-api';
import type { ComponentInternalInstance } from '@nuxtjs/composition-api';
import { NullPointerError } from '@/lib/error';
import { csrLoading } from '@/lib/loading';

export const useWorksSlugPage = (
  instance: ComponentInternalInstance | null
) => {
  if (!instance) {
    throw new NullPointerError('Not Context');
  }
  const { route } = useContext();
  const slug = computed(() => route.value.path);
  /** ここでslugを使い画像配列を作成し、propsで流すか？ */
  console.log(slug);
  const { timeoutID } = csrLoading(instance);

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
