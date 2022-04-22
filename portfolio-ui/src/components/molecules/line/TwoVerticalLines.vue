<template>
  <div class="vertical">
    <LineFloat />
    <LineFloat />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import LineFloat from '@/components/atoms/LineFloat.vue';

export default defineComponent({
  components: {
    LineFloat
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.vertical {
  position: relative;
  height: 100%;
}
</style>
