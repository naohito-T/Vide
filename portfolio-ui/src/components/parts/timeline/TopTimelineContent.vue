<!-- zoomで次々 -->
<template>
  <div class="zoom">
    <div class="zoom-wrap">
      <div class="zoom-wrap_waku"></div>
      <div class="pn50 pn51"><span>1</span></div>
      <div class="pn50 pn52"><span>2</span></div>
      <div class="pn50 pn53"><span>3</span></div>
      <div class="pn50 pn54"><span>4</span></div>
      <div class="pn50 pn55"><span>5</span></div>
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
.zoom {
  overflow: hidden;

  &-wrap {
    position: relative;
    height: 100vh;

    &_waku {
      height: 100%;
      border: 10px solid #333;
      box-shadow: inset 0 0 5px 5px #aaa;
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
