<template>
  <Tutorial />
</template>

<script lang="ts">
import {
  defineComponent,
  useAsync,
  useContext,
  useFetch,
  useRoute,
} from "@nuxtjs/composition-api";
import Tutorial from "@/components/Tutorial.vue";
import { FirebaseAPP } from "@/lib/firebase";

export default defineComponent({
  components: {
    Tutorial,
  },
  setup() {
    const { app } = useContext();
    const route = useRoute();
    const firebase: FirebaseAPP = new FirebaseAPP();
    // firebase.firestoreEmu;
    // const doc = useAsync(
    //   async () =>
    //     await
    // );
    // この3つの非同期処理うち、完全静的化で使用するのはuseFetch()およびuseStatic()になります。useAsync()はgenerate後もページ遷移時には非同期通信を行って内容を取得します。
    // useFetch()はasyncData()とは違い、ページコンポーネント以外でも利用できます
    // Option APIのように完全静的化は行いません。そのため、コンテンツの取得のための非同期通信よりは認証のようなクライアントとの通信が常に必要な場合にuseAsync()を利用すると良いでしょう。
    useFetch(async () => {
      let { slug } = route.value.params;
      slug = "sample";
      await app.$stores.home.fetchDocsInCollection(firebase.firestore, slug);
    });

    useAsync(async () => {
      let { slug } = route.value.params;
      slug = "sample";
      await app.$stores.home.fetchDocsInCollection(firebase.firestore, slug);
    });

    // console.log(`doc:: ${JSON.stringify(doc)}`);
    // if (process.client) {
    //   apps();
    // }

    return {};
  },
});
</script>
