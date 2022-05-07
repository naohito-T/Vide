<template>
  <div>
    <OrganismsHeader />
    <AtomsTextAnimationText />
    <PartsTopMainTopContent :projects="projects" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';
import { TopPageProject } from '@/lib/types';
export default defineComponent({
  props: {
    projects: {
      type: Array as PropType<TopPageProject[]>,
      required: true
    }
  },
  setup(props) {
    console.log(`props${props.projects}`);
    return {};
  }
});
</script>
