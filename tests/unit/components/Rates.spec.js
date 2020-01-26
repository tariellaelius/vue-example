import Vue from 'vue';
import Vuetify from 'vuetify';
import Rates from '@/components/Rates.vue';

import mockRatesResponse from '../helpers/mockResponse';
import mountWithVuetify from '../helpers/mountWithVuetify';


describe('Rates.vue', () => {
    let vuetify;

    beforeEach(() => {
        fetch.resetMocks();
        vuetify = new Vuetify();
    });

    it('renders EUR rate by default and two currencies when another one is added', () => {
        mockRatesResponse();
        const wrapper = mountWithVuetify(Rates, vuetify);

        // First nextTick() runs after fetch response has resolved
        // Next nextTick() runs after DOM is updated according to
        // the resolution of fetch
        return Vue.nextTick()
        .then(Vue.nextTick)
        .then(function () {
            const firstCurrency = wrapper.find('.v-list-item:first-child');
            expect(firstCurrency.text()).toEqual('EUR: 0.9062075215');

            wrapper.setData({ 
                selectedCurrencies: ['EUR', 'GBP']
            });
        
            const listItems = wrapper.findAll('.v-list-item');
            expect(listItems.length).toEqual(2);
        });
    });
});