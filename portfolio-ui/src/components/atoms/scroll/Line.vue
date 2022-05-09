<template>
  <!-- SCROLLの文字と矢印 -->
  <div class="scroll" id="type01">
    <a href="#type02" class="scroll-text" :style="`right: ${right}`">Scroll</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    right: {
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
.scroll {
  position: relative;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80%;
    background: linear-gradient(
      180deg,
      rgba(#000, 0) 0,
      rgba(#000, 0.8) 80%,
      rgba(#000, 0.8) 100%
    );
  }

  &-text {
    @include positionAbsWithBottomRight(0, 20%);
    display: inline-block;
    z-index: 2;
    padding: 10px 10px 110px;
    color: #fff;
    font-size: 14px;
    font-family: 'Josefin Sans', sans-serif;
    line-height: 1;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    text-decoration: none;
    writing-mode: vertical-lr;
    transition: 0.2s;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 1px;
      height: 100px;
      background: #fff;
    }
    &:hover {
      opacity: 0.5;
    }
  }
}

#type01 a::after {
  animation: sdl01 1.5s cubic-bezier(1, 0, 0, 1) infinite;
}
@keyframes sdl01 {
  0% {
    transform: scale(1, 0);
    transform-origin: 0 0;
  }
  50% {
    transform: scale(1, 1);
    transform-origin: 0 0;
  }
  50.1% {
    transform: scale(1, 1);
    transform-origin: 0 100%;
  }
  100% {
    transform: scale(1, 0);
    transform-origin: 0 100%;
  }
}

#type02 a::after {
  animation: sdl02 2.5s cubic-bezier(1, 0, 0, 1) infinite;
}
@keyframes sdl02 {
  0% {
    transform: scale(1, 0);
    transform-origin: 0 0;
  }
  25% {
    transform: scale(1, 1);
    transform-origin: 0 0;
  }
  25.1% {
    transform: scale(1, 1);
    transform-origin: 0 100%;
  }
  40%,
  100% {
    transform: scale(1, 0);
    transform-origin: 0 100%;
  }
}
</style>
