<template>
  <div class="thinright"></div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {}
});
</script>

<style lang="scss" scoped>
.thinright {
  position: relative;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 11px;
    left: 0px;
    width: 100px;
    height: 2px;
    background: #666;
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 72px;
    width: 20px;
    height: 20px;
    border: 2px solid;
    border-color: transparent transparent #666 #666;
    transform: rotate(-135deg);
  }
}
</style>
