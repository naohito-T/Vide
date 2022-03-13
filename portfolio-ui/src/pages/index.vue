<template>
  <Tutorial />
</template>

<script lang="ts">
import { defineComponent, useAsync, useContext } from "@nuxtjs/composition-api";
import Tutorial from "@/components/Tutorial.vue";
import { FirebaseAPP } from "@/lib/firebase";

export default defineComponent({
  components: {
    Tutorial,
  },
  setup() {
    const { app } = useContext();
    const firebase = new FirebaseAPP();
    const doc = useAsync(async () => {
      return await app.$stores.home.fetchDocsInCollection(
        firebase.firestore,
        "sample"
      );
    });

    console.log(`doc:: ${doc}`);

    return {};
  },
});
</script>
