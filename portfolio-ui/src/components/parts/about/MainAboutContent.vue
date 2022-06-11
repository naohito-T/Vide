<template>
  <main class="about-main">
    <!-- Mission -->
    <section class="top-block">
      <MoleculesPlaceHorizontally :leftWidth="'70%'" :rightWidth="'30%'">
        <template v-slot:left>
          <MoleculesConstitutesTexts
            :title="'MY MISSION'"
            :description="'私たちの事業は「ANTENNA」という、カルチャーをテーマとしたメディア活動からスタートしました。取り上げてきたのは「ローカル」で「インディペンデント」なひと・もの・こと。この活動を通して教わったのは、それぞれに宿る文化がいかに彩り豊かなのかということ。そしてその文化を形作るものは一人ひとりのモノの見方だということでした。どんなものでも少しの目の位置を変えることでなんにでも変わる。私たちはそんな体験を増やすために個人や企業に根ざすモノの観方を見つけ、育み、そしてそれを社会へ還元することを目指します。'"
          />
        </template>
        <template v-slot:right>
          <AtomsTextVerticalText :texts="['MY MISSION']" />
        </template>
        <AtomsBackgroundElectrocarDiagramBack />
      </MoleculesPlaceHorizontally>
    </section>
    <AtomsImageParallelogram
      :gsap-id="'left1'"
      :class-name="'down-from-left'"
      :image="'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05482_dtrj02.jpg'"
    />
    <!-- Promise -->
    <PartsAboutBlockDesc
      :gsap-id="'promise'"
      :title="'Promise'"
      :desc-en="'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'"
      :desc-ja="'私はチームを盛り上げることに出し惜しみはしません。チームの生産性は協調性から生まれると思っております。生産性を上げるため時にはハリウッドスターのような笑顔で盛り上げます。'"
    />
    <AtomsImageParallelogram
      :gsap-id="'right1'"
      :class-name="'down-from-right'"
      :image="'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05482_dtrj02.jpg'"
    />
    <!-- Policy -->
    <PartsAboutBlockDesc
      :gsap-id="'policy'"
      :title="'Policy'"
      :desc-en="'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'"
      :desc-ja="'日頃の生産性は心技体が揃って初めてパフォーマンスが出ると思っています。日々のランニング・筋トレなど身体のパフォーマンスを上げ、仕事に対するモチベーションは下げないようにしております。'"
    />
    <AtomsImageParallelogram
      :gsap-id="'left2'"
      :class-name="'down-from-left'"
      :image="'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05482_dtrj02.jpg'"
    />
    <!-- I am a ... -->
    <PartsAboutBlockDesc
      :gsap-id="'iam'"
      :title="'I am a ...'"
      :desc-en="'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'"
      :desc-ja="'私は美容師からのプログラマーとしてジョブチェンジしました。点はつながる。これも念頭におき、美容師で培った美をウェブに活かせないか日々模索しております。フロントエンドでもセンスの発揮、これは今まで助かる場面など多々ありました。'"
    />
    <AtomsImageParallelogram
      :gsap-id="'right2'"
      :class-name="'down-from-right'"
      :image="'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05482_dtrj02.jpg'"
    />
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import {
  useMainAboutContent,
  useMainAbountContentType
} from '@/composable/about';

export default defineComponent({
  setup() {
    try {
      const {
        texts,
        constitutesDesc,
        programDesc,
        accessoryDesc,
        beautifyDesc,
        techDesc
      } = useMainAboutContent() as useMainAbountContentType;
      return {
        texts,
        constitutesDesc,
        programDesc,
        accessoryDesc,
        beautifyDesc,
        techDesc
      };
    } catch (e: unknown) {}
  }
});
</script>

<style lang="scss" scoped>
.top-block {
  height: 40vh;
}

.about-block {
  @include displayFlex(center, row, center);
  color: #ccc;
  padding: 60px 20px 10px;
  height: 80vh;

  &-desc {
    @include displayFlex(center, column, center);
  }
}
</style>
