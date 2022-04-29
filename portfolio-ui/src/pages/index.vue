<template>
  <TemplateTopTemplate />
</template>

<script lang="ts">
import {
  defineComponent,
  useAsync,
  useContext,
  computed,
  getCurrentInstance,
  onMounted
} from '@nuxtjs/composition-api';
import {
  csrLoading,
  useLoading,
  UseLoadingType,
  LoadingKey
} from '@/lib/loading';
import { URLAnimation } from '@/utils';

export default defineComponent({
  meta: {},
  setup() {
    // provide(LoadingKey, useLoading());
    // const { isLoading } = inject(LoadingKey) as UseLoadingType;
    const { app } = useContext();
    // この3つの非同期処理うち、完全静的化で使用するのはuseFetch()およびuseStatic()になります。useAsync()はgenerate後もページ遷移時には非同期通信を行って内容を取得します。
    // useFetch()はasyncData()とは違い、ページコンポーネント以外でも利用できます
    // Option APIのように完全静的化は行いません。そのため、コンテンツの取得のための非同期通信よりは認証のようなクライアントとの通信が常に必要な場合にuseAsync()を利用すると良いでしょう。

    /**
     * @desc 現状ではlocalではSSRをするためのfunctionsができていなそう
     * そのためpageディレクトリ内ではuseAsyncができずdataが取得できない。
     */

    const project = useAsync(async () => {
      return await app.$stores.home.fetchDocsInCollection('project');
    }, 'project');

    const date = computed(() => {
      return app.$stores.home.snapList;
    });

    console.log(`useAsync${JSON.stringify(project)}`);
    console.log(`computed${JSON.stringify(date)}`);

    onMounted(() => {
      const instance = getCurrentInstance();
      const keyName = 'visited';
      const keyValue = 'true';
      const urlAnimation = new URLAnimation();
      urlAnimation.animation();
      if (!sessionStorage.getItem(keyName)) {
        console.log('初めての訪問です');
        sessionStorage.setItem(keyName, keyValue);
        // provide(LoadingKey, useLoading());
        // const { isLoading } = inject(LoadingKey) as UseLoadingType;
        csrLoading(instance);
      } else {
        //ここに通常アクセス時の処理
        console.log('訪問済みです');
      }
    });

    return {
      project
    };
  }
});
</script>
