<template>
  <div>
    <OrganismsHeader />
    <AtomsTextAnimationText />
    <PartsTopMainTopContent :img-state="imgState" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  PropOptions
} from '@nuxtjs/composition-api';
import { Project } from '@/lib/types';
export default defineComponent({
  props: {
    projectState: {
      type: Object as PropType<Project[]>,
      required: true
    },
    imgState: {
      type: Array,
      required: false
    } as PropOptions<String[] | null>
  },
  setup() {
    return {};
  }
});
</script>
