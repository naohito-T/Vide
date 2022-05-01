<template>
  <div>
    <OrganismsHeader />
    <!-- <AtomsTextAnimationText /> -->
    <PartsTopMainTopContent :img-state="imgState" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';
import { Project } from '@/lib/types';
export default defineComponent({
  props: {
    projectState: {
      type: Object as PropType<Project[]>,
      required: true
    },
    imgState: {
      type: Array as PropType<String[]>,
      required: true
    }
  },
  setup() {
    return {};
  }
});
</script>
