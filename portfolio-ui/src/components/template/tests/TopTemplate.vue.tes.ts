import { shallowMount } from '@vue/test-utils';
import WorksTemplate from '@/components/template/WorksTemplate.vue';

describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(WorksTemplate, {});
    expect(wrapper).toBeTruthy();
  });
});
