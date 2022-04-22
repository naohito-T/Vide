<template>
  <TopTemplate v-if="!isLoading" />
</template>

<script lang="ts">
import {
  defineComponent,
  useAsync,
  useContext,
  useRoute,
  computed,
  getCurrentInstance,
  inject,
  provide
} from '@nuxtjs/composition-api';
import TopTemplate from '@/components/template/TopTemplate.vue';
import {
  csrLoading,
  useLoading,
  UseLoadingType,
  LoadingKey
} from '@/lib/loading';

export default defineComponent({
  components: {
    TopTemplate
  },
  meta: {},
  setup() {
    const instance = getCurrentInstance();
    provide(LoadingKey, useLoading());
    const { timeoutID } = csrLoading(instance);
    const { isLoading } = inject(LoadingKey) as UseLoadingType;

    const { app } = useContext();
    const route = useRoute();
    // この3つの非同期処理うち、完全静的化で使用するのはuseFetch()およびuseStatic()になります。useAsync()はgenerate後もページ遷移時には非同期通信を行って内容を取得します。
    // useFetch()はasyncData()とは違い、ページコンポーネント以外でも利用できます
    // Option APIのように完全静的化は行いません。そのため、コンテンツの取得のための非同期通信よりは認証のようなクライアントとの通信が常に必要な場合にuseAsync()を利用すると良いでしょう。

    /**
     * @desc 現状ではlocalではSSRをするためのfunctionsができていなそう
     * そのためpageディレクトリ内ではuseAsyncができずdataが取得できない。
     *
     */

    const project = useAsync(async () => {
      return await app.$stores.home.fetchDocsInCollection('project');
    }, 'project');

    const date = computed(() => {
      return app.$stores.home.snapList;
    });

    console.log(`useAsync${JSON.stringify(project)}`);
    console.log(`computed${JSON.stringify(date)}`);

    return {
      project,
      isLoading
    };
  }
});
</script>
