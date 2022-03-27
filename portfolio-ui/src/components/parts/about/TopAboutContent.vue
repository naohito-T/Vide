<!-- About Top コンポーネント -->
<template>
  <div class="carousel">
    <hooper :settings="hooperSettings">
      <slide>
        <h1 class="carousel-title" data-number="01">Programming</h1>
        <!-- 縦書きの日付にする -->
        <p class="carousel-desc"></p>
        <a href="https://github.com/naohito-T/" target="_blank">
          <img
            class="carousel-img"
            src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05466_kwlv0n.jpg"
            alt="program"
          />
        </a>
      </slide>
      <slide>
        <h1 class="carousel-title" data-number="02">Accessory</h1>
        <a href="https://www.instagram.com/nuage_tokyo/" target="_blank">
          <img
            class="carousel-img"
            src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05513_gfbiwi.jpg"
            alt="nuage_tokyo"
        /></a>
      </slide>
      <!-- linkはblog作成したら動線に入れる -->
      <slide>
        <h1 class="carousel-title" data-number="03">Beautify</h1>
        <img
          class="carousel-img"
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05588_nb0dma.jpg"
          alt="beautify"
      /></slide>
      <!-- linkはblog作成したら動線に入れる。zenn入れようかな -->
      <slide>
        <h1 class="carousel-title" data-number="04">Tech</h1>
        <img
          class="carousel-img"
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05459_ziuomy.jpg"
          alt="tech"
      /></slide>
      <hooper-progress slot="hooper-addons"></hooper-progress>
    </hooper>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';
import {
  Hooper,
  Slide,
  Progress as HooperProgress
  // Pagination as HooperPagination, // ページネーションが必要なときにimport
  // Navigation as HooperNavigation // 左右のナビゲーションが必要なときにimport
} from 'hooper';
import 'hooper/dist/hooper.css'; // hooper default css 変えたい時はこれのルールセットを上書きする

export default defineComponent({
  components: {
    Hooper,
    Slide,
    HooperProgress
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
  @include displayFlex(center, row, center);
  @include positionRelativeBox(100vh, 100%);
  text-align: center;

  &-title {
    @include positionAbsWithTopLeft(5%, 10%);
    z-index: 2;
    padding-left: 8%;
    font-size: 30px;

    &:before {
      @include positionAbsWithTopLeft(50%, 0);

      content: attr(data-number);
      transform: translateY(-50%);
      color: rgba(63, 193, 201, 0.3);
      font-size: 80px;
    }

    &:after {
      @include positionAbsWithBottomLeft(-15px, 0);
      content: '';
      width: 100px;
      height: 1px;
      background-color: #3fc1c9;
    }
  }

  &-img {
    height: 100%;
    // ここはここ使ってもいいかも
    // min-width: 50%;
  }
}

/* hooper deafult css 編集 */
.hooper {
  height: 70vh;

  &-progress {
    @include positionAbsWithTopLeft(310px, -80px);
    position: absolute;
    height: 1px;
    width: 300px;
    background-color: #efefef;
    z-index: 10;
    transform: rotate(90deg);
  }
}
</style>
