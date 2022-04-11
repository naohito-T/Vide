<template>
  <div></div>
</template>

<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  PropType
} from '@nuxtjs/composition-api';
import type { NuxtError } from '@nuxt/types';

// エラーページの自動表示は、クライアントサイドでのレンダリング中のみになります。
// SSRモードのサーバーサイドレンダリング中に発生したエラーについては自動表示されないので注意が必要です。
export default defineComponent({
  props: {
    error: {
      type: Object as PropType<NuxtError>
      required: true,
    }
  },
  setup(props) {
    const instance = getCurrentInstance();
    const errorCode = instance.proxy.$nuxt.$route.query.error_code;

    return {};

  },
});
</script>
