<!-- 作品集左(見せたいもの?) -->
<!-- Work?左 -->
<template>
  <!-- <AtomsTextTitleText :title="'TIME LINE'" /> -->
  <!-- <MoleculesPlaceHorizontally>
    <template v-slot:left>
      <p>Hello</p>
    </template>
    <template v-slot:right>
      <p>Hello</p>
    </template>
  </MoleculesPlaceHorizontally> -->
  <div>
    <header
      style="
        height: 100px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 26px;
        position: sticky;
        top: 0;
      "
    >
      <span style="font-weight: bold; font-size: 30px; letter-spacing: 2px"
        >SITE-LOGO</span
      >
      <span
        style="
          font-weight: bold;
          font-size: 20px;
          margin-right: 30px;
          letter-spacing: -10px;
        "
        >・・・</span
      >
    </header>
    <div>
      <div style="margin: 80px 120px 40px">
        <div style="font-weight: bold; font-size: 70px">Title</div>
        <div style="font-weight: bold; font-size: 20px; color: #888">
          タイトル
        </div>
      </div>
      <div
        id="bg01"
        style="
          margin-bottom: 200px;
          position: relative;
          background-size: cover;
          width: 100%;
          height: 400px;
          background-image: url('https://s3-ap-northeast-1.amazonaws.com/onseo/uploads/article/thumbnail/9/1623193_s.jpg');
          filter: saturate(10%) contrast(70%) brightness(200%);
        "
      >
        <div
          id="pop01"
          style="
            padding: 60px;
            width: 500px;
            position: absolute;
            background-color: #fff;
          "
        >
          <div style="font-weight: bold; font-size: 40px; margin-bottom: 40px">
            POP-Title
          </div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </div>
    </div>
    <div>
      <div style="margin: 80px 120px 40px">
        <div style="font-weight: bold; font-size: 70px">Title</div>
        <div style="font-weight: bold; font-size: 20px; color: #888">
          タイトル
        </div>
      </div>
      <div
        id="bg02"
        style="
          margin-bottom: 200px;
          position: relative;
          background-size: cover;
          width: 100%;
          height: 400px;
          background-image: url('https://s3-ap-northeast-1.amazonaws.com/onseo/uploads/article/thumbnail/12/3019301_s.jpg');
          filter: saturate(10%) contrast(70%) brightness(200%);
        "
      >
        <div
          id="pop02"
          style="
            padding: 60px;
            width: 500px;
            position: absolute;
            background-color: #fff;
          "
        >
          <div style="font-weight: bold; font-size: 40px; margin-bottom: 40px">
            POP-Title
          </div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@nuxtjs/composition-api';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default defineComponent({
  setup() {
    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger);
      const bg01 = '#bg01';
      const pop01 = '#pop01';
      const start01 = 40;

      gsap.set(bg01, {
        opacity: 0
      });
      gsap.to(bg01, {
        scrollTrigger: {
          trigger: bg01,
          start: start01
        },
        duration: 1,
        opacity: 1
      });

      gsap.set(pop01, {
        opacity: 0,
        top: '20%',
        left: '60%'
      });
      gsap.to(pop01, {
        scrollTrigger: {
          trigger: pop01,
          start: start01
        },
        duration: 1,
        opacity: 1,
        left: '50%'
      });

      const bg02 = '#bg02';
      const pop02 = '#pop02';
      const start02 = 570;

      gsap.set(bg02, {
        opacity: 0
      });
      gsap.to(bg02, {
        scrollTrigger: {
          trigger: bg02,
          start: start02
        },
        duration: 1,
        opacity: 1
      });
      gsap.set(pop02, {
        opacity: 0,
        top: '20%',
        right: '60%'
      });
      gsap.to(pop02, {
        scrollTrigger: {
          trigger: pop02,
          start: start02
        },
        duration: 1,
        opacity: 1,
        right: '50%'
      });
    });
  }
});
</script>

<style lang="scss" scoped>
.wrap {
  @include displayFlex(center, column, center);
  margin-bottom: 20px;

  &-title {
    @include sp {
      font-size: getSpVW(40);
    }
  }
}
</style>
