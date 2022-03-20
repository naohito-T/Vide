<template>
  <div class="container">
    <section class="description panel">
      <div>
        <h1>Coding is design</h1>
        <p>
          Scroll vertically to scrub the horizontal animation. It also
          dynamically snaps to the sections in an organic way based on the
          velocity. The snapping occurs based on the natural ending position
          after momentum is applied, not a simplistic "wherever it is when the
          user stops".
        </p>
        <!-- ここプログレスバーにする -->
        <div class="scroll-down">
          Scroll down
          <div class="arrow"></div>
        </div>
      </div>
    </section>

    <section class="panel red">
      <img src="https://unsplash.it/1280/980" alt="" />
    </section>
    <section class="panel orange">
      <img src="https://unsplash.it/1280/980" alt="" />
    </section>
    <section class="panel purple">
      <img src="https://unsplash.it/1280/980" alt="" />
    </section>
    <section class="panel green">
      <img src="https://unsplash.it/1280/980" alt="" />
    </section>
    <section class="panel gray">
      <img src="https://unsplash.it/1280/980" alt="" />
    </section>
  </div>
  <!-- <header>
    <a href="https://greensock.com/scrolltrigger">
      <img
        class="greensock-icon"
        src="https://unsplash.it/1280/300"
        width="200"
        height="64"
      />
    </a>
  </header> -->
</template>

<script lang="ts">
import {
  defineComponent,
  useAsync,
  useContext,
  useRoute,
  computed
} from '@nuxtjs/composition-api';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default defineComponent({
  components: {
    // Tutorial,
  },
  setup() {
    if (process.client) {
      gsap.registerPlugin(ScrollTrigger);

      let sections = gsap.utils.toArray('.panel');

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '.container',
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          // base vertical scrolling on how wide the container is so it feels more natural.
          end: '+=3500'
        }
      });
    }
    return {};
  }
});
</script>

<style lang="scss" scoped>
body {
  overscroll-behavior: none;
  height: 100vh;
}
.container {
  overscroll-behavior: none;
  width: 600%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
}
.description {
  width: 100%;
  height: 100%;
}
.red {
  background-color: red;
  width: 100%;
  height: 100%;
}
.orange {
  background-color: orange;
  width: 100%;
  height: 100%;
}
.purple {
  background-color: purple;
  width: 100%;
  height: 100%;
}
.green {
  background-color: green;
  width: 100%;
  height: 100%;
}
.gray {
  background-color: grey;
  width: 100%;
  height: 100%;
}
</style>
