<template>
  <TemplateWorkSlugTemplate :slug="slug" />
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  computed,
  getCurrentInstance
} from '@nuxtjs/composition-api';
import { csrLoading } from '@/lib/loading';
import { rejectNumber } from '@/utils/validation';

export default defineComponent({
  // validate false → 404へ飛ばす
  // これ使用しても数字は拒否できるが文字列は拒否されない
  validate({ params }) {
    return rejectNumber(params.slug);
  },
  setup() {
    const instance = getCurrentInstance();
    const { route } = useContext();
    const { timeoutID } = csrLoading(instance, 1000);
    const slug = computed(() => route.value.path);

    /** ここでslugを使い画像配列を作成し、propsで流すか？ */
    console.log(slug);
    return {
      slug
    };
  }
});
</script>
