<template>
  <div class="container">
    <div class="container-inner">
      <div class="main-content">
        <div class="main-headings" id="main-headings-js">
          <p id="by-line">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div class="heading">
            <h3 id="heading1">Decouvrez</h3>
            <h3 id="heading2">la Jeune,</h3>
            <h1 id="heading3">Beaute</h1>
          </div>

          <div class="short-bio">
            <p>
              千葉出身。都内（銀座）での美容師経験があるソフトウェアエンジニア。モデル撮影のために購入したmacを使っていたらPCの仕組みが気になり始め、気づいたらエンジニアに。人生まるごとクリエイティブだと思っている。人の髪をデザインしていた経験をIT業界へ活かせることはないか日々模索中。
            </p>
            <p>
              Born in Japan. Software engineer with experience as a beautician
              in Tokyo (Ginza). When he was using a mac he bought for a model
              shoot, he started to be interested in how PCs work, and he found
              himself becoming an engineer. He believes that one's entire life
              is creative. He is always looking for ways to apply his experience
              in designing people's hair to the IT industry.
            </p>
          </div>
        </div>

        <!-- 英語にする -->
        <!-- <div class="more-info" id="more-info-js"> -->
        <!-- <h4>Lorem ipsum dolor sit.</h4> -->
        <!-- <p>
            Born in Japan. Software engineer with experience as a beautician in
            Tokyo (Ginza). When he was using a mac he bought for a model shoot,
            he started to be interested in how PCs work, and he found himself
            becoming an engineer. He believes that one's entire life is
            creative. He is always looking for ways to apply his experience in
            designing people's hair to the IT industry.
          </p> -->

        <!-- <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            delectus iusto facere dignissimos quaerat facilis voluptatibus fuga
            quod impedit. Atque tenetur amet officia repudiandae odit.
          </p>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            saepe suscipit deleniti porro fugit! Atque nisi alias a porro fugiat
            incidunt exercitationem! Nihil, consectetur. Expedita.
          </p> -->
        <!-- </div> -->
      </div>

      <div class="image-wrapper">
        <div class="image-container">
          <img
            class="image"
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=755bbb2b0afd5808494a8723774cd141"
            alt="image of a young woman."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  onMounted,
  nextTick
} from '@nuxtjs/composition-api';
import { AppGlobalGSAP } from '@/lib/gsap';
import {
  useMainAboutContent,
  useMainAbountContentType
} from '@/composable/about';
import { commonErrorHandler } from '@/lib/error';

export default defineComponent({
  setup() {
    onMounted(() => {
      Promise.all([nextTick()]).then(() => {
        const gsap = new AppGlobalGSAP().getGSAP;
        const area = document.querySelector('.container_img');
        const panels = document.querySelectorAll('.pn50');
        gsap.to('.container_img', {
          duration: 1,
          scrollTrigger: {
            trigger: '.container_img',
            toggleActions: 'play reset resume reset',
            start: 'top center+=30%', // topとは、triggerとして設定した.containerのトップ部分を指していて、centerはブラウザ側の中央部分を指しています。
            // end: '+=500',
            toggleClass: 'action'
          }
        });

        gsap.to('.a', {
          duration: 1,
          scrollTrigger: {
            trigger: '.a',
            toggleActions: 'play reset resume reset',
            start: 'top center+=30%', // topとは、triggerとして設定した.containerのトップ部分を指していて、centerはブラウザ側の中央部分を指しています。
            // end: '+=500',
            toggleClass: 'action'
          }
        });
      });
    });

    function readMore() {
      const expandInfo = document.getElementById('more-info-js');
      const mainHeadings = document.getElementById('main-headings-js');
      if (expandInfo && mainHeadings) {
        mainHeadings.style.transform = 'scale(0.7)';
        expandInfo.style.height = '350px';
      }
    }
    // const instance = getCurrentInstance();
    // try {
    //   const {
    //     texts,
    //     constitutesDesc,
    //     programDesc,
    //     accessoryDesc,
    //     beautifyDesc,
    //     techDesc
    //   } = useMainAboutContent() as useMainAbountContentType;
    //   return {
    //     texts,
    //     constitutesDesc,
    //     programDesc,
    //     accessoryDesc,
    //     beautifyDesc,
    //     techDesc
    //   };
    // } catch (e: unknown) {
    //   commonErrorHandler(e, instance);
    // }
    return {
      readMore
    };
  }
});
</script>

<style lang="scss" scoped>
//Font
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

//Variables
$mobile-breakpoint: 350px;
$large-mobile-breakpoint: 530px;
$tablet-breakpoint: 700px;
$desktop-breakpoint: 1200px;

//Mixins
//Centering Mixins
@mixin horizontal-center {
  margin-left: auto;
  margin-right: auto;
}

@mixin vertical-center {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

//Media Query mixins
@mixin mobile {
  @media (min-width: #{$mobile-breakpoint}) and (max-width: #{$large-mobile-breakpoint - 1}) {
    @content;
  }
}

@mixin tablet {
  @media (min-width: #{$large-mobile-breakpoint}) and (max-width: #{$tablet-breakpoint - 1}) {
    @content;
  }
}

@mixin desktop {
  @media (min-width: #{$tablet-breakpoint}) and (max-width: #{$desktop-breakpoint}) {
    @content;
  }
}

//Animations
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slide-in {
  0% {
    top: -300px;
  }
  100% {
    top: 0;
  }
}

@keyframes scaleDown {
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.7);
  }
  95% {
    transform: scale(0.7);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes reveal-info {
  0% {
    height: 0;
  }
  5% {
    height: 350px;
  }
  95% {
    height: 350px;
  }
  100% {
    height: 0;
  }
}

.container {
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 1200px;
  height: 700px;
  background-color: #d7ccc8;
  font-size: 14px;
  color: #000;
  font-family: 'Montserrat', sans;

  .container-inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    position: relative;
    animation: fade-in 1.5s ease, slide-in 1.2s ease;
    -webkit-animation: fade-in 1.5s ease, slide-in 1.2s ease;

    .main-content {
      flex-basis: 50%;
      order: 1;
      align-self: center;
      display: flex;
      flex-direction: column;

      .main-headings {
        width: 100%;
        align-self: center;
        display: flex;
        flex-direction: column;
        animation: scaleDown 6s ease 2s;
        -webkit-animation: scaleDown 6s ease 2s;

        #by-line {
          width: 60%;
          padding-bottom: 1px;
          padding-left: 3px;
          margin-left: 15px;
          font-size: 85%;
          border-bottom: 1px solid #757575;
          font-style: italic;
        }

        .heading {
          margin-top: 20px;
          margin-left: 80px;
          margin-bottom: 30px;

          #heading1,
          #heading2,
          #heading3 {
            margin: 0;
            margin-top: -20px;
          }
          #heading1,
          #heading2 {
            font-size: 500%;
            font-weight: normal;
            letter-spacing: -2px;
          }
          #heading1 {
            margin-left: 50px;
          }
          #heading2 {
            margin-left: 150px;
          }
          #heading3 {
            margin-top: -52px;
            font-size: 1100%;
            font-weight: 800;
            letter-spacing: 2px;
          }
        }
        .short-bio {
          width: 60%;
          margin-top: -30px;
          margin-left: 90px;
          font-style: italic;
          font-size: 105%;
        }
        a {
          // width: 72%;
          margin-left: 92px;
          // margin-right: auto;
          align-self: flex-start;
          font-weight: bold;
          font-size: 120%;
          font-family: helvetica;
          text-decoration: none;
          color: black;
          &:hover {
            text-decoration: underline;
          }
        }
      }

      .more-info {
        margin-top: -70px;
        width: 50%;
        height: 0;
        margin-left: auto;
        margin-right: auto;
        align-self: flex-start;
        overflow: hidden;
        // animation: reveal-info 4s ease 3s;
        // -webkit-animation: reveal-info 4s ease 3s;
      }
    }

    .image-wrapper {
      flex-basis: 50%;
      order: 2;
      //background-color was #8D6E63
      .image-container {
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        animation: scaleDown 6s ease 2s;
        -webkit-animation: scaleDown 6s ease 2s;
        img {
          width: 100%;
          height: auto;
          position: relative;
        }
      }
    }
  }
}

//Media Query for mobile devices
@include mobile {
  * {
    animation-name: none !important;
  }
  .container {
    @include horizontal-center;

    width: 90%;
    height: 100vh;
    font-size: 5px;
    margin-bottom: 20px;
  }
  .container-inner {
    flex-direction: column !important;
    justify-content: center !important;
  }
  .main-content,
  .image-wrapper {
    flex-basis: 100% !important;
  }
  .main-content {
    order: 2 !important;
    outline: 1px solid red;
    margin: 0 50px;
  }
  .image-wrapper {
    order: 1 !important;
  }
  .heading {
    margin-left: 55px !important;
  }
  #heading1,
  #heading2 {
    margin: 0;
    margin-top: -5px !important;
  }
  #heading2 {
    margin-left: 100px !important;
  }
  #heading3 {
    margin-top: -20px !important;
  }
  .short-bio {
    margin-top: -10px !important;
    margin-left: 60px !important;
  }
  .more-info {
    height: 150px !important;
    width: 60% !important;
    margin: 0 !important;
    align-self: flex-start !important;
    margin-top: 0px !important;
    margin-left: 60px !important;
    //text-align: justify;
    font-size: 8px;
  }
  .link {
    display: none;
  }
  .image-wrapper {
    order: 1 !important;
    width: 100%;
    height: 100px !important;
    justify-content: center !important;
  }
  .image-container {
    width: 100% !important;
    height: 400px;
    @include horizontal-center;
    @include vertical-center;
  }
  img {
    width: 80% !important;
    height: auto !important;
    top: -20px;
    @include horizontal-center;
  }
}

//Media Query for tablet devices

@include tablet {
  * {
    animation-name: none !important;
  }
  .container {
    width: 90%;
    height: 900px;
    @include horizontal-center;
    font-size: 8px;
  }
  .container-inner {
    flex-direction: column !important;
    justify-content: center !important;
  }
  .main-content,
  .image-wrapper {
    flex-basis: 100% !important;
  }
  .main-content {
    width: 80%;
    order: 2 !important;
    align-self: center !important;
  }
  .main-headings {
    width: 100%;
    margin-top: 20px;
    @include horizontal-center;
  }
  .heading {
    margin-left: 55px !important;
  }
  #heading1,
  #heading2 {
    margin: 0;
    margin-top: -15px !important;
  }
  #heading3 {
    margin-top: -30px !important;
  }
  .short-bio {
    margin-top: -20px !important;
    margin-left: 60px !important;
  }
  .link {
    display: none;
  }
  .more-info {
    height: 150px !important;
    width: 60% !important;
    margin: 0 !important;
    align-self: flex-start !important;
    margin-top: 0px !important;
    margin-left: 60px !important;
    text-align: justify;
  }
  .image-wrapper {
    order: 1 !important;
    width: 100%;
    height: 400px;
    justify-content: center !important;
  }
  .image-container {
    width: 100% !important;
    height: 400px;
    @include horizontal-center;
  }
  img {
    width: 80% !important;
    height: auto !important;
    top: -20px;
    @include horizontal-center;
  }
}

@include desktop {
  .container {
    width: 100%;
    height: auto;
    font-size: 9px;
  }

  .heading {
    margin-bottom: 50px;

    #heading3 {
      margin-top: -35px !important;
    }
  }

  .link {
    margin-left: 30px;
  }

  .more-info {
    margin-top: -40px !important;
  }
}
</style>
