<!--
  @desc 責務: ここに配置slotで配置すると、横に2カラムにする(基本50%ずつ)
  @attention Vuejs のコンポーネント間のやり取りは、親からはprops、
  子からは$emitで値を渡すのが通常ですが、slotの場合は基本的にどちらも使えません。
  従って、コンポーネント間のやりとりが必要な場合、slotに置き換えたために正常に動作しなくなるという可能性があります。
  ※これに対する最も安易な解決策はvuexを使うことだと思います。
 -->
<template>
  <div class="layout">
    <div class="layout-left" :style="{ width: `${leftWidth}` }">
      <slot name="left"></slot>
    </div>
    <div class="layout-right" :style="{ width: `${rightWidth}` }">
      <slot name="right"></slot>
    </div>
    <!-- <slot name="other"></slot> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    leftWidth: {
      type: String,
      required: false
    },
    rightWidth: {
      type: String,
      required: false
    }
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.layout {
  @include displayFlex(center, row, center);
  margin-bottom: 50px;

  &-left {
    width: 50%;
    height: 500px;
  }

  &-right {
    width: 50%;
    height: 500px;
  }
}
</style>
