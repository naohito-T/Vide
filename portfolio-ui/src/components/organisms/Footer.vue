<template>
  <footer class="footer" id="footer">
    <p class="footer-text" id="left">WORK CONTACT</p>
    <p class="footer-text" id="right">NAOHITO-T</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent, onMounted, nextTick } from '@nuxtjs/composition-api';
import { AppGlobalGSAP } from '@/lib/gsap';

export default defineComponent({
  setup() {
    const gsap = new AppGlobalGSAP().getGSAP;

    onMounted(() => {
      Promise.all([nextTick()]).then(() => {
        const footter = document.getElementById('footer') as Element;
        const footerTl = gsap.timeline({
          scrollTrigger: {
            trigger: '#footer',
            start: 'top +=10',
            end: 'center center',
            scrub: 1,
            toggleClass: { targets: '#footer', className: 'is-crossed' }
          }
        });
        footerTl.set('#left', { xPercent: -100 });
        footerTl.set('#right', { xPercent: 100 });
        footerTl
          .to('#left', { xPercent: 0 })
          .to('#right', { xPercent: 0 }, '<');
      });
    });
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
  user-select: none;

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
