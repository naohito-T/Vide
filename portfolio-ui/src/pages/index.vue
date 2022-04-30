<template>
  <TemplateTopTemplate :img-state="imgState" />
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from '@nuxtjs/composition-api';
import { useTopPage, UseTopPageType } from '@/composable/top/useTopPage';
import { commonErrorHandler } from '@/lib/error';

export default defineComponent({
  meta: {},
  setup() {
    const instance = getCurrentInstance();
    try {
      const { project, imgState } = useTopPage(instance) as UseTopPageType; // 別にasがなくてもpropsで推論してくれてる
      return {
        project,
        imgState
      };
    } catch (e) {
      commonErrorHandler(e, instance);
    }
  }
});
</script>
