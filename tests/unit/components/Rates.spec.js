import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import Rates from '@/components/Rates.vue';

describe('Rates.vue', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    it('renders EUR rate by default', () => {
        fetch.mockResponseOnce(JSON.stringify({
                "base": "USD",
                "rates": {
                    "EUR": 0.9062075215
                },
                "date": "2020-01-24"
            })
        );
        const wrapper = shallowMount(Rates);

        // First nextTick() runs after fetch response has resolved
        return Vue.nextTick().then(function () {
            // Next nextTick() runs after DOM is updated according to
            // the resolution of fetch
            return Vue.nextTick().then(function () {
                const firstCurrency = wrapper.find('ul li:first-child');
                expect(firstCurrency.text()).toEqual('EUR: 0.9062075215');
            });
        });
    });
});