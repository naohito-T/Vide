<template>
  <TemplateWorksTemplate />
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from '@nuxtjs/composition-api';
import { useWorksPage, UseWorksPageType } from '@/composable/works';
import { commonErrorHandler } from '@/lib/error';

export default defineComponent({
  setup() {
    const instance = getCurrentInstance();
    try {
      const { timeoutID } = useWorksPage(instance) as UseWorksPageType;
      return {
        timeoutID
      };
    } catch (e: unknown) {
      commonErrorHandler(e, instance);
    }
  }
});
</script>
