<template>
  <div class="mask">
    <p class="mask__caption">{{ title }}</p>
    <p class="mask__desc">
      {{ desc }}
    </p>
    <nuxt-link :to="`works/${link}`" class="mask__link">LINK</nuxt-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.mask {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0; /* 表示させない */
  background-color: rgba(0, 0, 0, 0.4);

  &__caption {
    font-size: 130%;
    color: #fff;
    text-align: center;
    padding: 3vh;
  }

  &__desc {
    font-size: 80%;
    color: #fff;
    text-align: center;
  }

  &__link {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
  }

  &:nth-child(odd) {
    -webkit-transform: rotateX(-180deg);
    transform: rotateX(-180deg);
    -webkit-transition: all 0.6s ease;
    transition: all 0.6s ease;
  }

  &:nth-child(even) {
    -webkit-transition: all 0.6s ease;
    transition: all 0.6s ease;
  }
}
</style>
