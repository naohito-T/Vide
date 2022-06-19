<template>
  <TemplateTopTemplate :projects="projectState.projects" />
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from '@nuxtjs/composition-api';
import { useTopPage, UseTopPageType } from '@/composable/top/useTopPage';
import { commonErrorHandler } from '@/lib/error';

export default defineComponent({
  meta: {},
  setup() {
    const instance = getCurrentInstance();
    try {
      const { projectState, imgState } = useTopPage(instance) as UseTopPageType; // 別にasがなくてもpropsで推論してくれてる
      return {
        projectState,
        imgState
      };
    } catch (e: unknown) {
      commonErrorHandler(e, instance);
    }
  }
  /**
   * @see https://zenn.dev/onota/articles/e8e405271653cac3afd7
   * asyncDataの場合、そのページで直接apiを叩いてデータを取得することを目的としているため、Vuexを使用して共通化している関数などを使用しない。
   * したがって、storeに格納しないデータ(アカウントデータやテーマなどの情報はlocalStrageやsessionStrageかから取得することを想定)を使用してデータ取得を行いたい場合に使用するイメージ。
   * また、asyncData内でstoreを使用することはできるが、gettersを動かしてページにデータを持ってくる必要がある。
   */
  // async asyncData(ctx) {
  //   return await ctx.app.$stores.home.fetchDownloadURLs('top');
  // }
});
</script>
