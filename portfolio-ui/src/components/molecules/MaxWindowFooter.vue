<template>
  <!-- v-slotでlayout変える -->
  <section class="layout">
    <slot name="footer"></slot>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {}
});
</script>

<style lang="scss" scoped>
.layout {
  height: 100vh;
  width: 100%;
}
</style>
