<template>
  <div>
    <Header />
    <main class="main">
      <p>{{ title }}</p>
      <p>{{ description }}</p>
    </main>
    <SNSIcons />
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
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  setup() {}
});
</script>
