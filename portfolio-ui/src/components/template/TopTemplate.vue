<template>
  <div>
    <OrganismsHeader />
    <PartsTopMainTopContent :img-state="imgState" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  computed,
  getCurrentInstance
} from '@nuxtjs/composition-api';
import { commonErrorHandler } from '@/lib/error';
export default defineComponent({
  setup() {
    const { app } = useContext();
    const instance = getCurrentInstance();
    try {
      const imgState = computed(() => app.$stores.home.getStorageFileURLs);
      return {
        imgState
      };
    } catch (e) {
      commonErrorHandler(e, instance);
    }
  }
});
</script>
