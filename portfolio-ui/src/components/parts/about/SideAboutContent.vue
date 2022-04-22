<template>
  <div class="side">animation point</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {}
});
</script>

<style lang="scss" scoped>
.side {
  width: 200px;

  @include tab {
    display: none;
  }
}
</style>
