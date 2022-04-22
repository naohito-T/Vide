import { mount } from '@vue/test-utils';
import WorksTemplate from '@/components/template/WorksTemplate.vue';

describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(WorksTemplate, {});
    expect(wrapper).toBeTruthy();
  });
});
