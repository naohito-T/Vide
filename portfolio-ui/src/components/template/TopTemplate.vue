<template>
  <div>
    <OrganismsHeader />
    <AtomsTextAnimationText />
    <PartsTopMainTopContent
      v-if="projectState"
      :project-state="projectState"
      :img-state="imgState"
    />
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
    // projectState: {
    //   type: Object,
    //   required: false
    // } as PropOptions<Project[]>,
    imgState: {
      type: Array,
      required: false
    } as PropOptions<String[] | null>
  },
  setup(props) {
    console.log(`props${props.projectState}`);
    return {};
  }
});
</script>
