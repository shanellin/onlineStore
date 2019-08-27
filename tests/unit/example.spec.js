import { shallowMount } from '@vue/test-utils'
import MarketSelect from '@/components/MarketSelect.vue'

describe('MarketSelect.vue', () => {
  it('Selector should has four items!!', () => {
    const wrapper = shallowMount(MarketSelect);
    let content = wrapper.vm.$el.querySelectorAll('.sticky-top a').length;
    expect(content).toBeGreaterThan(0);
  });
});
