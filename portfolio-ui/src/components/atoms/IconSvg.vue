<template>
  <div class="icon-svgs">
    <InstagramIcon v-if="type === 'insta'" color="#fff" />
    <TwitterIcon v-if="type === 'twitter'" color="#fff" />
    <TwitterIcon1 v-if="type === 'twitterGradient'" color="#fff" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import InstagramIcon from '@/assets/image/svg/instagram.svg';
import TwitterIcon from '@/assets/image/svg/twitter.svg';
import TwitterGradientIcon from '@/assets/image/svg/twitter-gradient.svg';

export default defineComponent({
  components: {
    InstagramIcon,
    TwitterIcon,
    TwitterGradientIcon
  },
  props: {
    type: {
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
.icon-svgs {
  svg {
    fill: currentColor;
    width: 24px;
    height: 24px;
  }
}
</style>
