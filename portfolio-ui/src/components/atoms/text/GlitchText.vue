<!-- @desc グリッチテキスト ザザザザとなるテキスト -->
<template>
  <div class="glitch" :data-text="texts">{{ texts }}</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    texts: {
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
.glitch {
  color: white;
  position: relative;
  font-size: 100px;

  @include sp {
    font-size: 50px;
  }

  &:before {
    content: attr(data-text);
    position: absolute;
    left: -2px;
    text-shadow: 1px 0 blue;
    top: 0;
    color: white;
    background: black;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: noise-anim-2 3s infinite linear alternate-reverse;
  }

  &:after {
    content: attr(data-text);
    position: absolute;
    left: 2px;
    text-shadow: -1px 0 red;
    top: 0;
    color: white;
    background: black;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: noise-anim 2s infinite linear alternate-reverse;
  }
}

@keyframes noise-anim {
  0% {
    clip: rect(2px, 9999px, 42px, 0);
  }
  5% {
    clip: rect(1px, 9999px, 76px, 0);
  }
  10% {
    clip: rect(92px, 9999px, 65px, 0);
  }
  15% {
    clip: rect(79px, 9999px, 40px, 0);
  }
  20% {
    clip: rect(48px, 9999px, 55px, 0);
  }
  25% {
    clip: rect(21px, 9999px, 1px, 0);
  }
  30% {
    clip: rect(40px, 9999px, 3px, 0);
  }
  35% {
    clip: rect(55px, 9999px, 41px, 0);
  }
  40% {
    clip: rect(96px, 9999px, 16px, 0);
  }
  45% {
    clip: rect(24px, 9999px, 78px, 0);
  }
  50% {
    clip: rect(32px, 9999px, 4px, 0);
  }
  55% {
    clip: rect(84px, 9999px, 15px, 0);
  }
  60% {
    clip: rect(30px, 9999px, 68px, 0);
  }
  65% {
    clip: rect(16px, 9999px, 43px, 0);
  }
  70% {
    clip: rect(85px, 9999px, 8px, 0);
  }
  75% {
    clip: rect(76px, 9999px, 41px, 0);
  }
  80% {
    clip: rect(8px, 9999px, 85px, 0);
  }
  85% {
    clip: rect(67px, 9999px, 57px, 0);
  }
  90% {
    clip: rect(51px, 9999px, 68px, 0);
  }
  95% {
    clip: rect(73px, 9999px, 11px, 0);
  }
  100% {
    clip: rect(60px, 9999px, 88px, 0);
  }
}

@keyframes noise-anim-2 {
  0% {
    clip: rect(40px, 9999px, 61px, 0);
  }
  5% {
    clip: rect(64px, 9999px, 19px, 0);
  }
  10% {
    clip: rect(81px, 9999px, 98px, 0);
  }
  15% {
    clip: rect(71px, 9999px, 71px, 0);
  }
  20% {
    clip: rect(45px, 9999px, 31px, 0);
  }
  25% {
    clip: rect(18px, 9999px, 33px, 0);
  }
  30% {
    clip: rect(26px, 9999px, 56px, 0);
  }
  35% {
    clip: rect(82px, 9999px, 54px, 0);
  }
  40% {
    clip: rect(37px, 9999px, 1px, 0);
  }
  45% {
    clip: rect(6px, 9999px, 61px, 0);
  }
  50% {
    clip: rect(73px, 9999px, 92px, 0);
  }
  55% {
    clip: rect(3px, 9999px, 45px, 0);
  }
  60% {
    clip: rect(5px, 9999px, 7px, 0);
  }
  65% {
    clip: rect(8px, 9999px, 55px, 0);
  }
  70% {
    clip: rect(13px, 9999px, 21px, 0);
  }
  75% {
    clip: rect(39px, 9999px, 13px, 0);
  }
  80% {
    clip: rect(100px, 9999px, 15px, 0);
  }
  85% {
    clip: rect(64px, 9999px, 96px, 0);
  }
  90% {
    clip: rect(9px, 9999px, 19px, 0);
  }
  95% {
    clip: rect(82px, 9999px, 3px, 0);
  }
  100% {
    clip: rect(61px, 9999px, 72px, 0);
  }
}
</style>
