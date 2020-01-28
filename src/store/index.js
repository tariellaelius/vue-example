import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        selectedCurrencies: ['EUR'],
    },
    mutations: {
        setSelectedCurrencies(state, currencies) {
            state.selectedCurrencies = currencies;
        },
    },
    actions: {
    },
    modules: {
    },
});
