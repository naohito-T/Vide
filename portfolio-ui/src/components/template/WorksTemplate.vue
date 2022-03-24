<template>
  <div>
    <Header />
    <main class="main">
      <LayoutImage :projects="mockProjects" />
    </main>
    <!-- <ul class="tile">
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05466_kwlv0n.jpg"
          alt="A Toyota Previa covered in graffiti"
          loading="lazy"
          class="tile-item__img"
        />
        <div class="tile-item-mask">
          <p class="tile-item-mask__caption">It's fresh !</p>
          <p class="tile-item-mask__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <nuxt-link to="/" class="tile-item-mask__link">LINK</nuxt-link>
        </div>
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05621_zgtcco.jpg"
          alt="Interesting living room light through a window"
          loading="lazy"
          class="tile-item__img"
        />
        <div class="tile-item-mask">
          <p class="tile-item-mask__caption">It's fresh !</p>
          <p class="tile-item-mask__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <nuxt-link to="/" class="tile-item-mask__link">LINK</nuxt-link>
        </div>
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05513_gfbiwi.jpg"
          alt="Sara on a red bike"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05588_nb0dma.jpg"
          alt="XOXO venue in between talks"
          load
          ing="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05459_ziuomy.jpg"
          alt="Trees lit by green light during dusk"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05586_oj8jfo.jpg"
          alt="Portrait of Justin Pervorse"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05465_dtkwef.jpg"
          alt="Empty bike racks outside a hotel"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05626_ytsf3j.jpg"
          alt="Heavy rain on an intersection"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05449_l9kukz.jpg"
          alt="Payam Rajabi eating peanut chicken"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05544_aczrb9.jpg"
          alt="Portland skyline sunset"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05447_mvffor.jpg"
          alt="Interior at Nong's"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05501_yirmq8.jpg"
          alt="A kimchi hotdog on a plate"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05624_f5b2ud.jpg"
          alt="Restaurant window with graffiti saying 'water'"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05623_dcpfva.jpg"
          alt="Portrait of Jeremy Tanner"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05515_d2gzut.jpg"
          alt="Jordan, Sarah and Sara on red bikes, waiting"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05581_ceocwv.jpg"
          alt="Barista wearing a hoodie saying 'Coffee Should Be Dope.'"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05517_ni2k0p.jpg"
          alt="Payam crossing the street on a bike"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814783/photostream-photos/DSC05620_qfwycq.jpg"
          alt="Lit trees reflected in a puddle"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814783/photostream-photos/DSC05462_b33uvp.jpg"
          alt="Moody chair in my hotel room"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814783/photostream-photos/DSC05489_mqzktl.jpg"
          alt="Tom and Jenn wearing sunglasses"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814783/photostream-photos/DSC05476_dlkjza.jpg"
          alt="Jordan and Sarah in front of a restaurant window"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814783/photostream-photos/DSC05497_abbd3c.jpg"
          alt="Sarah reading the Double Dragon drink menu"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05487_fcdv7t.jpg"
          alt="Beer brewing equipment"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05493_q6njbk.jpg"
          alt="2 cocktails in the making"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05446_xj60ff.jpg"
          alt="Beverage fridge at Nong's"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05559_hu49zx.jpg"
          alt="Wood structure reflections"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05482_dtrj02.jpg"
          alt="Colorful garden equipment in a shop window"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05565_dx5rp6.jpg"
          alt="Sarah in front of a wooden wall"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05613_o9af2z.jpg"
          alt="A neon banana"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05469_fdxdzx.jpg"
          alt="Matt Sacks smiling while we're waiting for food"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05558_yq2tnz.jpg"
          alt="A fixed-gear bike under some bright lights"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814781/photostream-photos/DSC05483_dyiuya.jpg"
          alt="Panic's PlayDate being held by a tester"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814781/photostream-photos/DSC05468_xzbtcd.jpg"
          alt="Window reflection of me and Payam"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814781/photostream-photos/DSC05457_nloycw.jpg"
          alt="Upside down shopping carts"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814781/photostream-photos/DSC05522_mekpec.jpg"
          alt="Payam riding a bike with no hands"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814781/photostream-photos/DSC05611_lbwtmk.jpg"
          alt="A kid's pillow left on the bench of a bus stop"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814781/photostream-photos/DSC05572_xfvij7.jpg"
          alt="My reflection in the mirror"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814781/photostream-photos/DSC05481_gnljae.jpg"
          alt="Jordan holding an iced coffee against his head to cool down"
          loading="lazy"
          class="tile-item__img"
        />
      </li>
      <li class="tile-item">
        <img
          src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814781/photostream-photos/DSC05480_zkw8sm.jpg"
          alt="Jordan and Sarah looking at the menu in a coffee shop"
          loading="lazy"
          class="tile-item__img"
        />
      </li> -->
    <!--  ここに空の<li class="tile-item">を追加することで、最終的な写真が狂ったように引き伸ばされることがありません。これを削除して、どうなるか試してみてください。  -->
    <!-- <li></li> -->

    <!-- </ul> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Header from '@/components/organisms/Header.vue';
import LayoutImage from '@/components/organisms/LayoutImage.vue';
import { mockProjects } from '@/__mocks__';

export default defineComponent({
  components: {
    Header,
    LayoutImage
  },
  setup() {
    console.log(`${JSON.stringify(mockProjects)}`);
    return {
      mockProjects
    };
  }
});
</script>
<style lang="scss" scoped>
.main {
  padding-top: 100px;
}
// .tile {
//   display: flex;
//   flex-wrap: wrap;

//   &-item {
//     height: 40vh;
//     flex-grow: 1;
//     position: relative;

//     &:hover &-mask {
//       -webkit-transform: rotateX(0deg);
//       transform: rotateX(0deg);
//       opacity: 1; /* ホバーで表示する */
//     }

//     &__img {
//       max-height: 100%;
//       min-width: 100%;
//       object-fit: cover;
//       vertical-align: bottom;
//     }

//     &-mask {
//       width: 100%;
//       height: 100%;
//       position: absolute;
//       top: 0;
//       left: 0;
//       opacity: 0; /* 表示させない */
//       background-color: rgba(0, 0, 0, 0.4);
//       -webkit-transform: rotateX(-180deg);
//       transform: rotateX(-180deg);
//       -webkit-transition: all 0.6s ease;
//       transition: all 0.6s ease;
//       &__caption {
//         font-size: 130%;
//         color: #fff;
//         text-align: center;
//         padding: 3vh;
//       }

//       &__desc {
//         font-size: 80%;
//         color: #fff;
//         text-align: center;
//       }

//       &__link {
//         position: absolute;
//         top: 0;
//         right: 0;
//         padding: 5px;
//       }
//     }
//   }
// }

// li:last-child {
//   // ここで "10 "を使うことに科学的根拠はない。私のテストでは、これが最も良い結果でした。
//   flex-grow: 10;
// }

// @media (max-aspect-ratio: 1/1) {
//   li {
//     height: 30vh;
//   }
// }

// Short screens

// @media (max-height: 480px) {
//   li {
//     height: 80vh;
//   }
// }

// Smaller screens in portrait

// @media (max-aspect-ratio: 1/1) and (max-width: 480px) {
//   ul {
//     flex-direction: row;
//   }

//   li {
//     height: auto;
//     width: 100%;
//   }
//   img {
//     width: 100%;
//     max-height: 75vh;
//     min-width: 0;
//   }
// }
</style>
