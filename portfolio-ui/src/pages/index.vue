<template>
  <Tutorial />
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import Tutorial from "@/components/Tutorial.vue";

export default defineComponent({
  components: {
    Tutorial,
  },
  setup() {
    return {};
  },
});
</script>
