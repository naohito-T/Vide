<template>
  <TemplateWorkSlugTemplate :slug="slug" />
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from '@nuxtjs/composition-api';
import { useWorksSlugPage, UseWorksSlugPageType } from '@/composable/works';
import { rejectNumber } from '@/utils/validation';
import { commonErrorHandler } from '@/lib/error';

export default defineComponent({
  // validate false → 404へ飛ばす(これ使用しても数字は拒否できるが文字列は拒否されない)
  validate({ params }) {
    return rejectNumber(params.slug);
  },
  setup() {
    const instance = getCurrentInstance();
    try {
      const { slug } = useWorksSlugPage(instance) as UseWorksSlugPageType;
      return {
        slug
      };
    } catch (e: unknown) {
      commonErrorHandler(e, instance);
    }
  }
});
</script>
