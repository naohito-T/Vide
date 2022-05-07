<template>
  <TemplateSkillsTemplate />
</template>
<script lang="ts">
// https://damian.drygiel.com/#skills
import { defineComponent, getCurrentInstance } from '@nuxtjs/composition-api';
import { useSkillsPage } from '@/composable/skills';
import { commonErrorHandler } from '@/lib/error';

export default defineComponent({
  setup() {
    const instance = getCurrentInstance();
    try {
      const { timeoutID } = useSkillsPage(instance);
      return {
        timeoutID
      };
    } catch (e: unknown) {
      commonErrorHandler(e, instance);
    }
  }
});
</script>
