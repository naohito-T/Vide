<!-- Light Char 7文字までは対応している -->
<template>
  <div class="char">
    <span
      v-for="(char, index) in chars"
      :class="`char-txt char-item${index}`"
      :key="index"
      >{{ char }}</span
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api';
import { strToCharacters } from '@/utils';

export default defineComponent({
  props: {
    texts: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const chars = computed(() => strToCharacters(props.texts).splice(1));
    return { chars };
  }
});
</script>

<style lang="scss" scoped>
.char {
  font-family: Montserrat;
  font-weight: bold;
  letter-spacing: 2px;

  &-txt {
    opacity: 0.15;
  }

  &-item0,
  &-item2 {
    animation: flickerLG 2s linear reverse infinite;
    position: relative;
  }

  &-item0 {
    &::after,
    &::before {
      content: ' ';
      width: 100px;
      height: 100px;
      background: var(--white);
      position: absolute;
      top: -50%;
      left: 100%;
      border-radius: 100%;
      opacity: 0.05;
      filter: blur(10px);
    }
    &::after {
      width: 200px;
      height: 200px;
      top: -150%;
      left: -5%;
      opacity: 0.1;
      filter: blur(10px);
    }
  }

  &-item1 {
    opacity: 1;
    animation: flickerI 2s linear reverse infinite;

    &::after {
      content: '';
      width: 150%;
      -webkit-box-shadow: -35px 0px 60px 8px rgba(255, 255, 255, 1);
      -moz-box-shadow: -35px 0px 60px 8px rgba(255, 255, 255, 1);
      box-shadow: -35px 0px 60px 8px rgba(255, 255, 255, 1);
    }
  }

  &-item3 {
    animation: flickerH 2s linear reverse infinite;
  }

  &-item4 {
    animation: flickerH 2s linear reverse infinite;
  }

  &-item5 {
    animation: flickerH 2s linear reverse infinite;
  }

  &-item6 {
    animation: flickerH 2s linear reverse infinite;
  }
}

@keyframes flickerI {
  0% {
    opacity: 0.4;
  }
  5% {
    opacity: 0.5;
  }
  10% {
    opacity: 0.6;
  }
  15% {
    opacity: 0.85;
  }
  25% {
    opacity: 0.5;
  }
  30% {
    opacity: 1;
  }
  35% {
    opacity: 0.1;
  }
  40% {
    opacity: 0.25;
  }
  45% {
    opacity: 0.5;
  }
  60% {
    opacity: 1;
  }
  70% {
    opacity: 0.85;
  }
  80% {
    opacity: 0.4;
  }
  90% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

@keyframes flickerLG {
  0% {
    opacity: 0.19;
  }
  5% {
    opacity: 0.2;
  }
  10% {
    opacity: 0.25;
  }
  15% {
    opacity: 0.35;
  }
  25% {
    opacity: 0.2;
  }
  30% {
    opacity: 0.4;
  }
  35% {
    opacity: 0.1;
  }
  40% {
    opacity: 0.25;
  }
  45% {
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  70% {
    opacity: 0.35;
  }
  80% {
    opacity: 0.4;
  }
  90% {
    opacity: 0.2;
  }
  100% {
    opacity: 0.4;
  }
}

@keyframes flickerH {
  0% {
    opacity: 0.15;
  }
  5% {
    opacity: 0.2;
  }
  10% {
    opacity: 0.12;
  }
  15% {
    opacity: 0.2;
  }
  25% {
    opacity: 0.15;
  }
  30% {
    opacity: 0.4;
  }
  35% {
    opacity: 0.05;
  }
  40% {
    opacity: 0.12;
  }
  45% {
    opacity: 0.15;
  }
  60% {
    opacity: 0.3;
  }
  70% {
    opacity: 0.2;
  }
  80% {
    opacity: 0.3;
  }
  90% {
    opacity: 0.18;
  }
  100% {
    opacity: 0.3;
  }
}

@keyframes flickerT {
  0% {
    opacity: 0.01;
  }
  5% {
    opacity: 0.05;
  }
  10% {
    opacity: 0.03;
  }
  15% {
    opacity: 0.1;
  }
  25% {
    opacity: 0.07;
  }
  30% {
    opacity: 0.1;
  }
  35% {
    opacity: 0.05;
  }
  40% {
    opacity: 0.06;
  }
  45% {
    opacity: 0.1;
  }
  60% {
    opacity: 0;
  }
  70% {
    opacity: 0.1;
  }
  80% {
    opacity: 0;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 0.1;
  }
}
</style>
