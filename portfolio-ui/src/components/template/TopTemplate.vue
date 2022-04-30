<template>
  <div>
    <OrganismsHeader />
    <PartsTopMainTopContent :img-state="imgState" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
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

