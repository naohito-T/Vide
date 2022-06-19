import { mount } from '@vue/test-utils';
import { ref } from '@nuxtjs/composition-api';
import VerticalText from '@/components/atoms/text/VerticalText.vue';

const texts = ref(['Program', 'Accessory', 'Beautify', 'Tech']);

describe('VerticalText', () => {
  test('VerticalText', () => {
    const wrapper = mount(VerticalText, {
      propsData: {
        texts: texts
      }
    });
    /** propsの検証 */
    expect(wrapper.props().texts).toBe(texts);
  });
});
