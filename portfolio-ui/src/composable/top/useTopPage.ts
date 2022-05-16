import {
  useContext,
  onMounted,
  onUnmounted,
  InjectionKey,
  ref,
  reactive,
  useFetch
} from '@nuxtjs/composition-api';
import type { ComponentInternalInstance } from '@nuxtjs/composition-api';
import { csrLoading } from '@/lib/loading';
import { URLAnimation, getSessionItem, setSessionItem } from '@/utils';
import { NullPointerError } from '@/lib/error';
import { TopPageProject } from '@/lib/types';

/**
 * この3つの非同期処理うち、完全静的化で使用するのはuseFetch()およびuseStatic()になります。useAsync()はgenerate後もページ遷移時には非同期通信を行って内容を取得します。
 * useFetch()はasyncData()とは違い、ページコンポーネント以外でも利用できます
 * Option APIのように完全静的化は行いません。そのため、コンテンツの取得のための非同期通信よりは認証のようなクライアントとの通信が常に必要な場合にuseAsync()を利用すると良いでしょう。
 */
export const useTopPage = (ctx: ComponentInternalInstance | null) => {
  if (!ctx) {
    throw new NullPointerError('Not Context');
  }

  const { app } = useContext();
  const imgState = ref<string[] | null>([]);
  const projectState = reactive<{ projects: TopPageProject[] }>({
    projects: []
  });
  const urlAnimation = new URLAnimation();
  const keyName = 'visited';
  const keyValue = 'true';

  useFetch(async () => {
    projectState.projects = (await app.$stores.home.fetchDocumentAllInFireStore(
      'top'
    )) as TopPageProject[];
    // urlがわかりたいとき
    imgState.value = await app.$stores.home.fetchDownloadURLs('top');
  });

  csrLoading(ctx);

  onMounted(() => {
    if (!getSessionItem(keyName)) {
      setSessionItem(keyName, keyValue);
      urlAnimation.animation();
    }
  });

  onUnmounted(async () => {
    console.log('clearHash');
    await urlAnimation.clearHash();
  });

  return {
    projectState,
    imgState
  };
};

// type
export type UseTopPageType = ReturnType<typeof useTopPage>;
// key
export const UseTopPageTypeKey: InjectionKey<UseTopPageType> =
  Symbol('useTopPage');
