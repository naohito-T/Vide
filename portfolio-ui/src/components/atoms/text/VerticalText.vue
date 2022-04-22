<!-- 指定の文字を縦に配置するコンポーネント @TODO 決め打ちをやめたい -->
<template>
  <div class="vertical">
    <h1 :class="`vertical-ele ${rotateClass}`">
      <div v-for="(text, index) in texts" :key="index">
        {{ text }}
      </div>
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ToRefs } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    texts: {
      type: Object as PropType<
        ToRefs<{
          text: string[];
        }>
      >,
      required: true
    },
    rotateClass: {
      type: String,
      default: 'transform'
    }
  },
  setup() {}
});
</script>

<style lang="scss" scoped>
.vertical {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;

  &-ele {
    line-height: 1;
    white-space: nowrap;
    font-size: 4rem;
    width: 100%;
    padding-left: 20%;
    margin-bottom: 0;
  }
}

/** 左に90度回転 */
.transform {
  transform: rotate(-90deg);
}

.transform90 {
  transform: rotate(90deg);
}
</style>
