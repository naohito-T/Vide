<!-- zoomで次々 -->
<template>
  <div class="zoom">
    <div class="zoom-wrap">
      <div class="zoom-wrap_waku"></div>
      <div class="pn50 pn51">
        <span
          class="zoom-wrap__image"
          style="background-image: url(https://placeimg.com/802/802/nature)"
        ></span>
      </div>
      <div class="pn50 pn52">
        <span
          class="zoom-wrap__image"
          style="background-image: url(https://placeimg.com/802/802/nature)"
        ></span>
      </div>
      <div class="pn50 pn53">
        <span
          class="zoom-wrap__image"
          style="background-image: url(https://placeimg.com/802/802/nature)"
        ></span>
      </div>
      <div class="pn50 pn54">
        <span
          class="zoom-wrap__image"
          style="background-image: url(https://placeimg.com/802/802/nature)"
        ></span>
      </div>
      <div class="pn50 pn55">
        <span
          class="zoom-wrap__image"
          style="background-image: url(https://placeimg.com/802/802/nature)"
        ></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from '@nuxtjs/composition-api';
import { useTopTimelineContent } from '@/composable/timeline';
import { commonErrorHandler } from '@/lib/error';

export default defineComponent({
  setup() {
    const instance = getCurrentInstance();
    try {
      useTopTimelineContent(instance);
    } catch (e: unknown) {
      commonErrorHandler(e, instance);
    }
  }
});
</script>

<style lang="scss" scoped>
.separate {
  overflow: hidden;
  height: 30vw;

  img {
    width: 100%;
  }
}

.zoom {
  overflow: hidden;

  &-wrap {
    position: relative;
    height: 100vh;

    &_waku {
      height: 100%;
      box-shadow: inset 0 0 2px 2px #aaa;
    }

    &__image {
      background-size: cover;
      width: 100%;
      height: 100%;
      display: block;
    }
  }
}
.pn50 {
  position: absolute;
}

.pn51 {
  background: #346c9c;
}

.pn52 {
  background: #b1c3cb;
}

.pn53 {
  background: #595757;
}

.pn54 {
  background: #b1c3cb;
}

.pn55 {
  background: #346c9c;
}
</style>
