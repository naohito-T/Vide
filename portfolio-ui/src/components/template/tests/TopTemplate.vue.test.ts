import { shallowMount } from '@vue/test-utils';
import WorksTemplate from '@/components/template/WorksTemplate.vue';
import Header from '@/components/organisms/Header.vue';
import MainWorksContent from '@/components/parts/works/MainWorksContent.vue';
import SNSIcons from '@/components/organisms/VerticalSNSIcons.vue';

describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(WorksTemplate, {
      components: {
        Header,
        MainWorksContent,
        SNSIcons
      }
    });
    expect(wrapper.findAllComponents(WorksTemplate)).toBe(true);
  });
});
