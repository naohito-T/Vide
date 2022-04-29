<!-- 配置した要素をanimation で全て出す。-->
<template>
  <footer class="footer" id="footer">
    <p class="footer-text" id="left">WORK CONTACT</p>
    <p class="footer-text" id="right">NAOHITO-T</p>
  </footer>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUnmounted
} from '@nuxtjs/composition-api';
import { GSAPAnimations } from '@/lib/gsap';

export default defineComponent({
  // footerTl
  //       .fromTo(
  //         '#left',
  //         {
  //           xPercent: -100
  //         },
  //         { xPercent: 0 }
  //       )
  //       .fromTo(
  //         '#right',
  //         {
  //           xPercent: 100
  //         },
  //         { xPercent: 0 },
  //         '<'
  //       );
  setup() {
    let footerTl: gsap.core.Timeline;
    onMounted(() => {
      footerTl = new GSAPAnimations().timeLine();
      footerTl.set('#left', { xPercent: -100 });
      footerTl.set('#right', { xPercent: 100 });
      footerTl.to('#left', { xPercent: 0 }).to('#right', { xPercent: 0 }, '<');
    });
    // onUnmounted(() => {
    //   footerTl.kill();
    // });
    return {};
  }
});
</script>

<style lang="scss" scoped>
.footer {
  @include displayFlex(center, column, center);
  height: 100vh;
  width: 100%;
  overflow: hidden;

  &.is-crossed:before {
    transform: translate(0, 0);

    .footer-text {
      color: #ffffff;
    }
  }

  &:before {
    @include positionAbsWithTopLeft(0, 0);

    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: #333;
    transform: translate(0, 100%);
    // @see https://ics.media/entry/18730/
    transition: transform cubic-bezier(0.215, 0.6, 0.355, 1) 0.6s;
  }

  &-text {
    font-weight: bold;
    font-size: getPcVW(50);
  }
}
</style>
