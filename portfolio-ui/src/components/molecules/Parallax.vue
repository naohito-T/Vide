<!-- https://hakoirioyaji.com/blog/gsap-scrolltrigger-parallax/ -->
<template>
  <div>
    <div class="space">
      <h1>GSAP ScrollTrigger Parallax</h1>
    </div>

    <div class="separate">
      <img
        class="js-parallax"
        src="https://source.unsplash.com/a1BlhTu0lMI/"
        data-y="-20vw"
      />
    </div>

    <!-- <div class="content">
      <div class="item">
        <div class="image js-parallax">
          <img src="https://source.unsplash.com/500x500/?Fashion" alt="" />
        </div>
        <div class="text js-parallax" data-y="-50">
          <p>Fashion</p>
        </div>
      </div>

      <div class="item">
        <div class="image js-parallax">
          <img src="https://source.unsplash.com/500x500/?Nature" alt="" />
        </div>
        <div class="text js-parallax" data-y="-50">
          <p>Nature</p>
        </div>
      </div>

      <div class="item">
        <div class="image js-parallax" data-y="-100">
          <img src="https://source.unsplash.com/500x500/?Fashion" alt="" />
        </div>
        <div class="text js-parallax" data-y="-50">
          <p>Fashion</p>
        </div>
      </div>
    </div>

    <div class="separate">
      <img
        class="js-parallax"
        data-y="-20vw"
        src="https://source.unsplash.com/38Pkx1dnyQU/"
      />
    </div>
    <div class="space">END</div> -->
  </div>
</template>

  <script lang="ts">
import {
  defineComponent,
  onMounted,
  ComponentInternalInstance,
  nextTick
} from '@nuxtjs/composition-api';
import { AppGlobalGSAP } from '@/lib/gsap';

export default defineComponent({
  setup() {
    onMounted(() => {
      Promise.all([nextTick()]).then(() => {
        const gsap = new AppGlobalGSAP().getGSAP;

        gsap.utils.toArray<HTMLElement>('.js-parallax').forEach((wrap) => {
          const y = wrap.getAttribute('data-y') || -100;

          gsap.to(wrap, {
            y: y,
            scrollTrigger: {
              trigger: wrap,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.5
              //markers: true
            }
          });
        });
      });
    });
  }
});
</script>

<style lang="scss" scoped>
.space {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;
  // background-color: #333;
  color: #fff;
}

.separate {
  overflow: hidden;
  height: 30vw;
}

.separate img {
  width: 100%;
}

.content {
  padding: 10vw 5% 5vw;
  background: #fff;
}

.item {
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 10vw;
}

.item:nth-child(odd) {
  flex-direction: row-reverse;
}

.item .image {
  width: 35%;
  max-height: 300px;
  height: 15vw;
  overflow: visible;
}

.item .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.item .text {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0 5%;
  background: #eee;
  border-radius: 8px;
}
</style>
