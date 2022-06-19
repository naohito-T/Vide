<template>
  <section class="timeline">
    <div class="timeline-item">
      <div
        class="timeline-item__bg"
        style="background-image: url(https://placeimg.com/802/802/nature)"
      ></div>

      <div class="tl-year">
        <p class="f2 heading--sanSerif">I am a ...</p>
      </div>

      <div class="tl-content">
        <h1 class="f3 text--accent ttu">I am a ...</h1>
        <p>
          私は美容師からのプログラマーとしてジョブチェンジしました。点はつながる。これも念頭におき、美容師で培った美をウェブに活かせないか日々模索しております。フロントエンドでもセンスの発揮、これは今まで助かる場面など多々ありました。
        </p>
      </div>
    </div>

    <div class="timeline-item">
      <div
        class="timeline-item__bg"
        style="background-image: url(https://placeimg.com/801/801/nature)"
      ></div>

      <div class="tl-year">
        <p class="f2 heading--sanSerif">Policy</p>
      </div>

      <div class="tl-content">
        <h1>Policy</h1>
        <p>
          私はチームを盛り上げることに出し惜しみはしません。チームの生産性は協調性から生まれると思っております。生産性を上げるため時にはハリウッドスターのような笑顔で盛り上げます。
        </p>
      </div>
    </div>

    <div class="timeline-item">
      <div
        class="timeline-item__bg"
        style="background-image: url(https://placeimg.com/803/803/nature)"
      ></div>

      <div class="tl-year">
        <p class="f2 heading--sanSerif">health</p>
      </div>

      <div class="tl-content">
        <h1 class="f3 text--accent ttu">health</h1>
        <p>
          日頃の生産性は心技体が揃って初めてパフォーマンスが出ると思っています。日々のランニング・筋トレなど身体のパフォーマンスを上げ、仕事に対するモチベーションは下げないようにしております。
        </p>
      </div>
    </div>

    <div class="timeline-item">
      <div
        class="timeline-item__bg"
        :style="{ backgroundImage: 'url(/assets/image/png/product.jpg)' }"
      ></div>
      <!-- <div  :style="{'background-image': `url(${require('')})`}"> -->
      <!-- <div

        style="background-image: url('')"
      ></div> -->

      <div class="tl-year">
        <p class="f2 heading--sanSerif">challenge</p>
      </div>

      <div class="tl-content">
        <h1 class="f3 text--accent ttu">challenge</h1>
        <p>
          仕事に還元できることはないか、日々模索し挑戦しております。そのひとつであるアクセサリーブランド立ち上げは挑戦のひとつです。
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {}
});
</script>


<style lang="scss" scoped>
.timeline {
  display: flex;
  background-color: #031625;

  &:hover {
    .timeline-item {
      width: 23.3333%;
    }
  }

  &-item {
    transform: translate3d(0, 0, 0);
    position: relative;
    width: 25%;
    height: 100vh;
    min-height: 600px;
    color: #fff;
    overflow: hidden;
    transition: width 0.5s ease;

    &:before,
    &:after {
      transform: translate3d(0, 0, 0);
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    &:after {
      background: transparentize(#031625, 0.15);
      opacity: 1;
      transition: opacity 0.5s ease;
    }

    &:before {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 75%
      );
      z-index: 1;
      opacity: 0;
      transform: translate3d(0, 0, 0) translateY(50%);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }

    &:hover {
      width: 30% !important;

      @include sp {
        width: 100% !important;
      }

      &:after {
        opacity: 0;
      }

      &:before {
        opacity: 1;
        transform: translate3d(0, 0, 0) translateY(0);
        transition: opacity 1s ease, transform 1s ease 0.25s;
      }

      .tl-content {
        opacity: 1;
        transform: translateY(0);
        transition: all 0.75s ease 0.5s;
      }

      .timeline-item__bg {
        filter: grayscale(0);
      }
    }
  }
}

.tl-content {
  transform: translate3d(0, 0, 0) translateY(25px);
  position: relative;
  z-index: 1;
  text-align: center;
  margin: 0 1.618em;
  top: 55%;
  opacity: 0;

  h1 {
    font-family: 'Pathway Gothic One', Helvetica Neue, Helvetica, Arial,
      sans-serif;
    text-transform: uppercase;
    color: #1779cf;
    font-size: 1.44rem;
    font-weight: normal;
    margin-bottom: 15px;
  }
}

.tl-year {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;

  p {
    font-family: 'Pathway Gothic One', Helvetica Neue, Helvetica, Arial,
      sans-serif;
    font-size: 1.728rem;
    line-height: 0;
  }
}

.timeline-item__bg {
  transform: translate3d(0, 0, 0);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center center;
  transition: filter 0.5s ease;
  filter: grayscale(100%);
}
</style>
