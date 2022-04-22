import { shallowMount } from '@vue/test-utils';
import ChaseLineButton from '@/components/atoms/button/ChaseLineButton.vue';

const buttonText = 'Test Message';
describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(ChaseLineButton, {
      propsData: {
        btnText: buttonText
      }
    });
    expect(wrapper.text()).toBe(buttonText);
  });
});
