<!-- slotを入れた場合、周りを囲むように出す -->
<template>
  <div class="background" :style="{ backgroundImage: `url(${image})` }">
    <!-- <slot></slot> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    image: {
      type: String,
      required: true
    }
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.background {
  background-image: cover;
}
</style>
