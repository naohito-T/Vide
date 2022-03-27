<!-- 指定の文字を縦に配置するコンポーネント @TODO 決め打ちをやめたい -->
<template>
  <div class="vertical">
    <h1 class="vertical-ele">
      <div class="">Muraflex</div>
      <div class="">Superior</div>
      <div class="">Demountable</div>
      <div class="">Glass Partitions</div>
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {}
});
</script>

<style lang="scss" scoped>
.vertical {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  &-ele {
    white-space: nowrap;
    font-size: 4rem;
    width: 100%;
    transform: rotate(-90deg);
    padding-left: 20%;
    margin-bottom: 0;
  }
}
</style>
