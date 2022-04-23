<template>
  <SkillsTemplate />
</template>
<script lang="ts">
// https://damian.drygiel.com/#skills
import { defineComponent, getCurrentInstance } from '@nuxtjs/composition-api';
import SkillsTemplate from '@/components/template/SkillsTemplate.vue';
import { csrLoading } from '@/lib/loading';

export default defineComponent({
  components: {
    SkillsTemplate
  },
  setup() {
    const instance = getCurrentInstance();
    const { timeoutID } = csrLoading(instance);
    return {};
  }
});
</script>
