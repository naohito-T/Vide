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
import {
  defineComponent,
  PropType,
  onMounted,
  nextTick
} from '@nuxtjs/composition-api';
import { AppGlobalGSAP, setAlpha } from '@/lib/gsap';
export default defineComponent({
  props: {
    texts: {
      type: Array as PropType<String[]>,
      required: true
    },
    rotateClass: {
      type: String,
      default: 'transform'
    }
  },
  setup() {
    onMounted(() => {
      Promise.all([nextTick()]).then(() => {
        const gsap = new AppGlobalGSAP().getGSAP;
        setAlpha(gsap, '.vertical');
        gsap.to('.vertical', {
          y: 20,
          autoAlpha: 1,
          duration: 1,
          scrollTrigger: {
            trigger: '.vertical',
            toggleActions: 'play reset resume reset',
            start: 'top center', // topとは、triggerとして設定した.containerのトップ部分を指していて、centerはブラウザ側の中央部分を指しています。
            end: '+=500'
            // markers: true
          }
        });
      });
    });
  }
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
    width: 100%;
    margin-bottom: 0;
    font-size: getSpVW(18);
    user-select: none;

    @include tab {
      font-size: getTabVW(24);
    }

    @include sp {
      font-size: getSpVW(21);
    }
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
