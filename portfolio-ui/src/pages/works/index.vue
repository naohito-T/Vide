<template>
  <WorksTemplate />
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  getCurrentInstance
} from '@nuxtjs/composition-api';
import WorksTemplate from '@/components/template/WorksTemplate.vue';
import { csrLoading } from '@/lib/loading';

export default defineComponent({
  components: {
    WorksTemplate
  },
  setup() {
    const instance = getCurrentInstance();
    // csrLoading(instance);
    if (process.client) {
      instance?.proxy.$nuxt.$loading.start();
      instance?.proxy.$nuxt.$loading.finish();
    }
    return {};
  }
});
</script>
