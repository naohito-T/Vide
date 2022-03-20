<template>
  <div>
    <main class="container">
      <header class="header">
        <nav class="nav">
          <ul class="nav-item">
            <nuxt-link to="/works"><p>Works</p></nuxt-link>
            <nuxt-link to="/about"><p>About</p></nuxt-link>
          </ul>
        </nav>
      </header>
      <!-- ここはcenterにくるタイトルとその説明、下部にはプログレスバー -->
      <section class="container-top panel">
        <div class="container-top-wrap">
          <h1 class="container-top-wrap__title">Coding is design</h1>
          <p class="container-top-wrap__desc">
            Scroll vertically to scrub the horizontal animation. It also
            dynamically snaps to the sections in an organic way based on the
            velocity. The snapping occurs based on the natural ending position
            after momentum is applied, not a simplistic "wherever it is when the
            user stops".
          </p>
        </div>
      </section>

      <!-- v-for使う。a タグでwork/_slugに遷移 -->
      <section class="panel red">
        <!-- 画像とちょっとしたタイトル -->
        <div class="panel-list">
          <nuxt-link to="/works">
            <p>画像に重ねる</p>
            <img src="https://unsplash.it/700/450" alt="" />
          </nuxt-link>
          <p>下のタイトル</p>
        </div>
      </section>
      <section class="panel orange">
        <img src="https://unsplash.it/700/450" alt="" />
      </section>
      <section class="panel purple">
        <img src="https://unsplash.it/700/450" alt="" />
      </section>
      <section class="panel green">
        <img src="https://unsplash.it/700/450" alt="" />
      </section>
      <section class="panel gray">
        <img src="https://unsplash.it/700/450" alt="" />
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@nuxtjs/composition-api';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default defineComponent({
  components: {
    // Tutorial,
  },
  setup() {
    // onMountedでブラウザバックにも対応ができる。
    onMounted(() => {
      if (process.client) {
        gsap.registerPlugin(ScrollTrigger);

        let sections = gsap.utils.toArray('.panel');
        console.log(sections);
        // GSAPでは、transform : translateX、transform : translateYの代わりに、X座標（x）、Y座標（y）、Xパーセント（xPercent）、Yパーセント（yPercent）を提供しています。
        /** topがWindowはばになるため、それをwindow幅にする */

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
    });

    return {};
  }
});
</script>

<style lang="scss" scoped>
// .wrap {
//   // @include displayFlex(center, column, center);
//   display: flex;
//   flex-flow: column;
//   min-height: 100vh;
// }

.header {
  height: 100px; /* 高さを50pxに指定 */
  position: fixed;

  .nav {
    &-item {
      @include displayFlex(center, row, center);
    }
  }
}

.main {
  // flex: 1;
}

.container {
  width: 99vw;
  height: 100vh;
  overscroll-behavior: none;
  display: flex;
  flex-wrap: nowrap;

  &-top {
    @include displayFlex(center, column, center);
    width: 100%;
    height: 100%;

    &-wrap {
      &__title {
        font-size: 8vw;
        white-space: nowrap;
      }

      &__desc {
      }
    }
  }
}
.red {
  background-color: red;
  width: 99vw;
  height: 100vh;
}
.orange {
  background-color: orange;
  width: 99vw;
  height: 100vh;
}
.purple {
  background-color: purple;
  width: 99vw;
  height: 100vh;
}
.green {
  background-color: green;
  width: 99vw;
  height: 100vh;
}
.gray {
  background-color: grey;
  width: 99vw;
  height: 100vh;
}
</style>
