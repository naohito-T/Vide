<template>
  <TemplateTimelineTemplate />
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance } from '@nuxtjs/composition-api';
import { useTimelinePage, UseTimelinePageType } from '@/composable/timeline';
import { commonErrorHandler } from '@/lib/error';

export default defineComponent({
  setup() {
    const instance = getCurrentInstance();
    try {
      const { timeoutID } = useTimelinePage(instance) as UseTimelinePageType;
      return {
        timeoutID
      };
    } catch (e: unknown) {
      commonErrorHandler(e, instance);
    }
  }
});
</script>
