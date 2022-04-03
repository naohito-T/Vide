<template>
  <WorkSlugTemplate :slug="slug" />
</template>

<script lang="ts">
import { defineComponent, useContext, computed } from '@nuxtjs/composition-api';
import WorkSlugTemplate from '@/components/template/WorkSlugTemplate.vue';

export default defineComponent({
  components: {
    WorkSlugTemplate
  },
  setup() {
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
