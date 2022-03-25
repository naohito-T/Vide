<template>
  <div class="icon-svgs">
    <InstagramIcon v-if="type === 'insta'" color="#fff" />
    <TwitterIcon v-if="type === 'twitter'" color="#fff" />
    <TwitterGradientIcon v-if="type === 'twitterGradient'" color="#fff" />
    <PinterestIcon v-if="type === 'pinterest'" color="#fff" />
    <BlogIcon v-if="type === 'blog'" color="#fff" />
    <GithubIcon v-if="type === 'github'" color="#fff" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import InstagramIcon from '@/assets/image/svg/instagram.svg';
import TwitterIcon from '@/assets/image/svg/twitter.svg';
import TwitterGradientIcon from '@/assets/image/svg/twitter-gradient.svg';
import PinterestIcon from '@/assets/image/svg/pinterest.svg';
import BlogIcon from '@/assets/image/svg/blog.svg';
import GithubIcon from '@/assets/image/svg/github.svg';

export default defineComponent({
  components: {
    InstagramIcon,
    TwitterIcon,
    TwitterGradientIcon,
    PinterestIcon,
    BlogIcon,
    GithubIcon
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
