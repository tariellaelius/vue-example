<template>
    <v-card>
        <v-expand-transition>
            <CurrencyTable
                :currencies="selectedCurrencies"
                :rates="rates"
                :linked="true"
            />
        </v-expand-transition>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                @click="$parent.$emit('SwitchComponent', 'Search')">
                Search
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import CurrencyTable from './CurrencyTable.vue';

import updateRatesMixin from '../mixins/updateRatesMixin';
import ratesAPIMixin from '../mixins/ratesAPIMixin';

import allCurrencies from '@/data/currencies';

export default {
    name: 'Rates',
    data() {
        return {
            currencies: allCurrencies,
            rates: this.rates,
        };
    },
    components: {
        CurrencyTable,
    },
    mixins: [
        updateRatesMixin,
        ratesAPIMixin,
    ],
    created() {
        this.updateRates(allCurrencies);
    },
    computed: {
        selectedCurrencies: {
            get() {
                return this.$store.state.selectedCurrencies;
            },
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    margin-bottom: 2rem;
}
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
