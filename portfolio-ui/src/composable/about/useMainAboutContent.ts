import { reactive, toRefs } from '@nuxtjs/composition-api';

export const useMainAboutContent = () => {
  /**
   * @desc reactiveの注意点
   * reactiveを使用する際にはリアクティビティの消失に注意する必要
   * 同様にスプレッド構文を使用してもリアクティビティが失われてしまうため注意が必要
   * reactiveで生成したオブジェクトに分割代入を適用して得た変数はリアクティブではなくなってしまう
   * const obj = reactive({
   *  count: 1,
   * });
   * // countはリアクティブではありません!!
   * const { count } = obj;
   * // obj.countが変更されても反応しません!!
   * const doubleCount = computed(() => {
   * return count * 2;
   * });
   */
  const textsState = toRefs(
    reactive({
      texts: ['Program', 'Accessory', 'Beautify', 'Tech']
    })
  );

  return { ...textsState };
};

export type useMainAbountContentType = ReturnType<typeof useMainAboutContent>;
