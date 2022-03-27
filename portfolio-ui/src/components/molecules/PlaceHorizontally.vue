<!--
  @desc 責務: ここに配置slotで配置すると、横に2カラムにする
  @attention Vuejs のコンポーネント間のやり取りは、親からはprops、
  子からは$emitで値を渡すのが通常ですが、slotの場合は基本的にどちらも使えません。
  従って、コンポーネント間のやりとりが必要な場合、slotに置き換えたために正常に動作しなくなるという可能性があります。
  ※これに対する最も安易な解決策はvuexを使うことだと思います。
 -->
<template>
  <div class="layout">
    <div class="layout-left">
      <slot name="left"></slot>
    </div>
    <div class="layout-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {}
});
</script>

<style lang="scss" scoped>
.layout {
  justify-content: center;
  display: flex;
  align-items: center;

  &-left {
    justify-content: center;
    display: flex;
    align-items: center;
    flex: 1;
    width: 50%;
    height: 500px;
    background-color: red;
    position: relative;
  }

  &-right {
    flex: 1;
    width: 50%;
    height: 500px;
    background-color: blue;
  }
}
</style>
