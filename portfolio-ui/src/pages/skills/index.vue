<!-- skills 参考 https://damian.drygiel.com/#skills -->
<template>
  <TemplateSkillsTemplate />
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance } from '@nuxtjs/composition-api';
import { useSkillsPage, UseSkillsPageType } from '@/composable/skills';
import { commonErrorHandler } from '@/lib/error';

export default defineComponent({
  setup() {
    const instance = getCurrentInstance();
    try {
      const { timeoutID } = useSkillsPage(instance) as UseSkillsPageType;
      return {
        timeoutID
      };
    } catch (e: unknown) {
      commonErrorHandler(e, instance);
    }
  }
});
</script>
