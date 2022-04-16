<template>
  <WorkSlugTemplate :slug="slug" />
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  computed,
  getCurrentInstance
} from '@nuxtjs/composition-api';
import WorkSlugTemplate from '@/components/template/WorkSlugTemplate.vue';
import { csrLoading } from '@/lib/loading';

export default defineComponent({
  components: {
    WorkSlugTemplate
  },
  setup() {
    const instance = getCurrentInstance();
    const { timeoutID } = csrLoading(instance, 1000);

    const { route } = useContext();
    const slug = computed(() => route.value.path);

    /** ここでslugを使い画像配列を作成し、propsで流すか？ */
    console.log(slug);
    return {
      slug
    };
  }
});
</script>
