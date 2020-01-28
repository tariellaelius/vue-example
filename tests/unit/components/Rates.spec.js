import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import Rates from '@/components/Rates.vue';

import mockRatesResponse from '../helpers/mockResponse';
import mountWithVuetify from '../helpers/mountWithVuetify';


describe('Rates.vue', () => {
    let vuetify;
    let store;

    beforeEach(() => {
        fetch.resetMocks();
        vuetify = new Vuetify();
        store = new Vuex.Store({
            state: {
                selectedCurrencies: ['EUR'],
            },
            mutations: {
                setSelectedCurrencies(state, currencies) {
                    state.selectedCurrencies = currencies;
                },
            },
        });
    });

    it('renders EUR rate by default and two currencies when another one is added', () => {
        mockRatesResponse();
        const wrapper = mountWithVuetify(Rates, { vuetify, store });

        // First nextTick() runs after fetch response has resolved
        // Next nextTick() runs after DOM is updated according to
        // the resolution of fetch
        return Vue.nextTick()
        .then(Vue.nextTick)
        .then(function () {
            const firstDataRow = wrapper.find('.v-data-table tbody tr');
            const firstCurrency = firstDataRow.find('td');
            expect(firstCurrency.text()).toEqual('EUR');

            wrapper.vm.$store.commit(
                'setSelectedCurrencies', 
                ['EUR', 'GBP'],
            );
        
            const listItems = wrapper.findAll('.v-data-table tbody tr');
            expect(listItems.length).toEqual(2);
        });
    });
});