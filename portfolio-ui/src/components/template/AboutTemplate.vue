<template>
  <div>
    <Header />
    <SNSIcons />
    <div class="carousel">Calusel Top</div>
    <div class="wrapper">
      <div class="wrapper-side">animation point</div>
      <main class="wrapper-main">
        <div class="wrapper-main-layout">
          <div class="layout-item-left">
            <p class="layout-item-left__vision">Your vision. Unrestricted.</p>
            <div class="layout-item-left__desc">
              <p class="layout-item-left__desc--ele">
                Muraflex transforms floor plans into architectural spaces. With
                a European touch, our design-savvy demountable glass office wall
                systems and freestanding pods create a distinguished work
                environment, bringing elegance and purpose together. Rather than
                permanent drywall, benefit from safe, flexible and
                reconfigurable walls through one of our 7 lines: MIMO, FINO and
                QUADRO our demountable glass partitions, EXPO our telescoping
                door, the versatile demising wall system PLANIKA, and finally
                two freestanding pods: ARCO and ZITTO.
              </p>
            </div>
          </div>
          <!-- こっち英語 -->
          <div class="layout-item-right"></div>
        </div>

        <div class="wrapper-main-layout">
          <div class="layout-item-left">
            <p class="layout-item-left__vision">Your vision. Unrestricted.</p>
            <div class="layout-item-left__desc">
              <p class="layout-item-left__desc--ele">
                Muraflex transforms floor plans into architectural spaces. With
                a European touch, our design-savvy demountable glass office wall
                systems and freestanding pods create a distinguished work
                environment, bringing elegance and purpose together. Rather than
                permanent drywall, benefit from safe, flexible and
                reconfigurable walls through one of our 7 lines: MIMO, FINO and
                QUADRO our demountable glass partitions, EXPO our telescoping
                door, the versatile demising wall system PLANIKA, and finally
                two freestanding pods: ARCO and ZITTO.
              </p>
            </div>
          </div>
          <!-- こっち英語 -->
          <div class="layout-item-right"></div>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Header from '@/components/organisms/Header.vue';
import SNSIcons from '@/components/organisms/VerticalSNSIcons.vue';

export default defineComponent({
  components: {
    Header,
    SNSIcons
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
/* カルーセルを入れる予定 */
.carousel {
  height: 100vh;
  width: 100%;
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
}

.wrapper {
  display: flex;

  &-side {
    width: 200px;
    background-color: beige;
  }

  &-main {
    flex: 1;

    &-layout {
      justify-content: center;
      display: flex;
      align-items: center;

      .layout-item-left {
        flex: 1;
        height: 700px;
        background-color: red;
        position: relative;

        &__vision {
          font-size: 20px;
          position: absolute;
          top: -40px;
          left: -60px;
        }

        &__desc {
          display: flex;
          align-items: center;
          justify-content: center;

          &-ele {
          }
        }
      }

      .layout-item-right {
        flex: 1;
        height: 700px;
        background-color: blue;
      }
    }
  }
}

.orange {
  height: 300px;
  width: 300px;
  background-color: orange;
}

.white {
  height: 300px;
  width: 300px;
  background-color: white;
}
</style>
