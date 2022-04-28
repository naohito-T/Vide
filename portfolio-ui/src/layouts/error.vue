<template>
  <TemplateErrorTemplate
    :title="errorMessage.title"
    :description="errorMessage.description"
  />
</template>

<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  PropType
} from '@nuxtjs/composition-api';
import type { NuxtError } from '@nuxt/types';
import type { ErrorMessage, ErrorMessageCode } from '@/lib/types';
import { generateErrorMessage } from '@/utils';

// エラーページの自動表示は、クライアントサイドでのレンダリング中のみ
// SSRモードのサーバーサイドレンダリング中に発生したエラーについては自動表示されないので注意が必要
export default defineComponent({
  props: {
    error: {
      type: Object as PropType<NuxtError>,
      required: true
    }
  },
  setup(props) {
    const instance = getCurrentInstance();
    const errorCode = instance?.proxy.$nuxt.$route.query.error_code as
      | ErrorMessageCode
      | undefined;
    const errorMessage: ErrorMessage = generateErrorMessage(
      props.error.statusCode,
      errorCode
    );

    return {
      errorMessage
    };
  }
});
</script>
