<!-- defaultは縦に配置される -->
<template>
  <span :class="`line ${side}`" id="slow_line"></span>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    side: {
      type: String,
      default: ''
    }
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.line {
  display: inline-block;
  width: 10px;
  height: 55px;
  background-color: #969696;
  z-index: 3;

  .side {
    transform: rotate(90deg);
  }
}
</style>
