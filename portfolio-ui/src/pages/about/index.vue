<template>
  <TemplateAboutTemplate :projects="projectState.projects" />
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from '@nuxtjs/composition-api';
import { useAboutPage, UseAboutPageType } from '@/composable/about';
import { commonErrorHandler } from '@/lib/error';

export default defineComponent({
  setup() {
    const instance = getCurrentInstance();
    try {
      const { projectState } = useAboutPage(instance) as UseAboutPageType;
      return {
        projectState
      };
    } catch (e) {
      commonErrorHandler(e, instance);
    }
  }
});
</script>
