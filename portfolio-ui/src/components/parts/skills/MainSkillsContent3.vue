<!-- 作品集左(見せたいもの?) -->
<!-- Work?左 -->
<template>
  <div>
    <div class="loader df aic jcc">
      <div>
        <h1>Loading</h1>
        <h2 class="loader--text">0%</h2>
      </div>
    </div>
    <div class="demo-wrapper">
      <header class="df aic jcc">
        <div>
          <h1>ScrollTrigger</h1>
          <h2>demo</h2>
        </div>
      </header>
      <section class="demo-text">
        <div class="wrapper text">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
      </section>
      <section class="demo-gallery">
        <ul class="wrapper">
          <li>
            <img
              height="874"
              src="https://source.unsplash.com/random/1240x874?sig=73"
              width="1240"
            />
          </li>
          <li>
            <img
              height="874"
              src="https://source.unsplash.com/random/1240x874?sig=199"
              width="1240"
            />
          </li>
          <li>
            <img
              height="874"
              src="https://source.unsplash.com/random/1240x874?sig=124"
              width="1240"
            />
          </li>
          <li>
            <img
              height="874"
              src="https://source.unsplash.com/random/1240x874?sig=9"
              width="1240"
            />
          </li>
        </ul>
      </section>
      <section class="demo-gallery">
        <ul class="wrapper">
          <li>
            <img
              height="874"
              src="https://source.unsplash.com/random/1240x874?sig=10"
              width="1240"
            />
          </li>
          <li>
            <img
              height="874"
              src="https://source.unsplash.com/random/1240x874?sig=181"
              width="1240"
            />
          </li>
          <li>
            <img
              height="874"
              src="https://source.unsplash.com/random/1240x874?sig=43"
              width="1240"
            />
          </li>
        </ul>
      </section>
      <section class="demo-gallery">
        <ul class="wrapper">
          <li>
            <img
              height="874"
              src="https://source.unsplash.com/random/1240x874?sig=183"
              width="1240"
            />
          </li>
          <li>
            <img
              height="874"
              src="https://source.unsplash.com/random/1240x874?sig=84"
              width="1240"
            />
          </li>
          <li>
            <img
              height="874"
              src="https://source.unsplash.com/random/1240x874?sig=190"
              width="1240"
            />
          </li>
        </ul>
      </section>
      <section class="demo-gallery">
        <ul class="wrapper">
          <li>
            <img
              height="874"
              src="https://source.unsplash.com/random/1240x874?sig=183"
              width="1240"
            />
          </li>
          <li>
            <img
              height="874"
              src="https://source.unsplash.com/random/1240x874?sig=9"
              width="1240"
            />
          </li>
          <li>
            <img
              height="874"
              src="https://source.unsplash.com/random/1240x874?sig=205"
              width="1240"
            />
          </li>
          <li>
            <img
              height="874"
              src="https://source.unsplash.com/random/1240x874?sig=52"
              width="1240"
            />
          </li>
        </ul>
      </section>
      <section class="demo-text">
        <div class="wrapper text">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
      </section>
      <footer class="df aic jcc">
        <p>Images from <a href="https://unsplash.com/">Unsplash</a></p>
      </footer>
    </div>
    <script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from '@nuxtjs/composition-api';
import {
  useMainSkillsContent,
  UseMainSkillsContentType
} from '@/composable/skills';
import { commonErrorHandler } from '@/lib/error';

export default defineComponent({
  setup() {
    const instance = getCurrentInstance();
    try {
      useMainSkillsContent(instance) as UseMainSkillsContentType;
    } catch (e: unknown) {
      commonErrorHandler(e, instance);
    }
  }
});
</script>

<style lang="scss" scoped>
body {
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
}

h1 {
  font-size: 5rem;
}
h2 {
  font-size: 2rem;
}

img {
  width: 100%;
  height: auto;
  background: #f0f0f0;
}

ul {
  padding-left: 1rem;
  list-style: none;
}

li {
  flex-shrink: 0;
  width: clamp(500px, 60vw, 800px);
  padding-right: 1rem;
}

header {
  height: 100vh;
}
footer {
  height: 50vh;
}

:any-link {
  color: #4e9815;
}

.df {
  display: flex;
}
.aic {
  align-items: center;
}
.jcc {
  justify-content: center;
}

.loader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
  color: white;
}

.demo-wrapper {
  overflow-x: hidden;
}

.wrapper {
  display: flex;
}

.demo-gallery:not(.last) {
  padding-bottom: 1rem;
}

.demo-text .text {
  font-size: clamp(8rem, 15vw, 16rem);
  line-height: 1;
  font-weight: 900;
}
</style>
