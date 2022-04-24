<template>
  <TemplateSkillsTemplate />
</template>
<script lang="ts">
// https://damian.drygiel.com/#skills
import { defineComponent, getCurrentInstance } from '@nuxtjs/composition-api';
import { csrLoading } from '@/lib/loading';

export default defineComponent({
  setup() {
    const instance = getCurrentInstance();
    const { timeoutID } = csrLoading(instance);
    return {};
  }
});
</script>
