<template>
  <div class="carousel">
    <!-- <hooper :progress="true" :autoPlay="true" :playSpeed="2000"> -->
    <hooper :settings="hooperSettings">
      <slide
        ><img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05466_kwlv0n.jpg"
      /></slide>

      <slide
        ><img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05513_gfbiwi.jpg"
      /></slide>
      <slide
        ><img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05588_nb0dma.jpg"
      /></slide>
      <slide
        ><img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05459_ziuomy.jpg"
      /></slide>
      <slide
        ><img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05586_oj8jfo.jpg"
      /></slide>
    </hooper>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';
import {
  Hooper,
  Slide
  // Pagination as HooperPagination, // ページネーションが必要なときにimport
  // Navigation as HooperNavigation // 左右のナビゲーションが必要なときにimport
} from 'hooper';
import 'hooper/dist/hooper.css'; // もしCSSを変えたいときではなかった。hooperのcssを使いたい時

export default defineComponent({
  components: {
    Hooper,
    Slide
  },
  setup() {
    const hooperSettings = reactive({
      progress: true,
      autoPlay: true,
      playSpeed: 2000,
      wheelControl: false
    });
    return {
      hooperSettings
    };
  }
});
</script>

<style lang="scss" scoped>
.carousel {
  height: 100vh;
  width: 100%;
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
}

.hooper {
  height: 600px;
}
</style>
