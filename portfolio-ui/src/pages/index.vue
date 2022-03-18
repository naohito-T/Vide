<template>
  <TopTemplate />
</template>

<script lang="ts">
import {
  defineComponent,
  useAsync,
  useContext,
  useFetch,
  useRoute,
  computed,
} from "@nuxtjs/composition-api";
import { FirebaseAPP } from "@/lib/firebase";
import TopTemplate from "@/components/template/TopTemplate.vue";

export default defineComponent({
  components: {
    // Tutorial,
    TopTemplate,
  },
  setup() {
    const { app } = useContext();
    const route = useRoute();
    // const firebase: FirebaseAPP = new FirebaseAPP();
    // firebase.firestoreEmu;
    // const doc = useAsync(
    //   async () =>
    //     await
    // );
    // この3つの非同期処理うち、完全静的化で使用するのはuseFetch()およびuseStatic()になります。useAsync()はgenerate後もページ遷移時には非同期通信を行って内容を取得します。
    // useFetch()はasyncData()とは違い、ページコンポーネント以外でも利用できます
    // Option APIのように完全静的化は行いません。そのため、コンテンツの取得のための非同期通信よりは認証のようなクライアントとの通信が常に必要な場合にuseAsync()を利用すると良いでしょう。

    // const date = computed(() => {
    //   app.$stores.home.snapList;
    // });

    // console.log(`date ${date}`);
    // そもそもここが実行されていない。
    // useFetch(async () => {
    //   let { slug } = route.value.params;
    //   slug = "sample";
    //   return await app.$stores.home.fetchDocsInCollection(
    //     firebase.firestore,
    //     slug
    //   );
    // });

    const docs = useAsync(async () => {
      let { slug } = route.value.params;
      slug = "sample";
      return await app.$stores.home.fetchDocsInCollection(slug);
    }, "docs");

    console.log(docs);

    return {
      docs,
    };
  },
});
</script>
