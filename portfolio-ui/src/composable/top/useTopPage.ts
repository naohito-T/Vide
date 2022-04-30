import {
  useAsync,
  useContext,
  onMounted,
  onUnmounted,
  InjectionKey,
  ref,
  computed
} from '@nuxtjs/composition-api';
import type { ComponentInternalInstance } from '@nuxtjs/composition-api';
import { csrLoading } from '@/lib/loading';
import { URLAnimation, getSessionItem, setSessionItem } from '@/utils';
import { AppConfig } from '@/config';
import { NullPointerError } from '@/lib/error';

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
  const top = useAsync(async () => {
    return await app.$stores.home.fetchDownloadURLs('top');
  }, 'top');

  const appConfig = new AppConfig();
  const urlAnimation = new URLAnimation();
  const keyName = 'visited';
  const keyValue = 'true';
  // const imgState = ref<string[]>(appConfig.topPageImages);
  // const imgState = ref<string[]>([])

  // imgState.value = appConfig.topPageImages;

  /**
   * @desc 現状ではlocalではSSRをするためのfunctionsができていなそう
   * そのためpageディレクトリ内ではuseAsyncができずdataが取得できない。
   */
  const project = useAsync(async () => {
    return await app.$stores.home.fetchDocsInCollection('project');
  }, 'project');

  console.log(`useAsync${JSON.stringify(project)}`);

  onMounted(() => {
    if (!getSessionItem(keyName)) {
      console.log('初めての訪問です');
      csrLoading(ctx);
      setSessionItem(keyName, keyValue);
      urlAnimation.animation();
    } else {
      console.log('訪問済みです');
    }
  });

  onUnmounted(async () => {
    console.log('clearHash');
    await urlAnimation.clearHash();
  });

  return {
    project
  };
};

// type
export type UseTopPageType = ReturnType<typeof useTopPage>;
// key
export const UseTopPageTypeKey: InjectionKey<UseTopPageType> =
  Symbol('useTopPage');
