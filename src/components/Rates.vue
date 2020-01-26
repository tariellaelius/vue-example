<template>
    <div class="currency-rates">
        <h1>Currency Rates</h1>
        <v-card>
            <v-card-title class="headline">Search for Currencies</v-card-title>
            <v-card-text>
                <v-autocomplete
                    v-model="selectedCurrencies"
                    :items="currencies"
                    multiple
                    hide-no-data
                    hide-selected
                    label="Currencies"
                    placeholder="Start typing to Search"
                ></v-autocomplete>
            </v-card-text>
            <v-divider></v-divider>
            <v-expand-transition>
                <v-list v-if="rates" class>
                    <v-list-item v-for="currency in selectedCurrencies" :key="currency">
                        <v-list-item-content>
                            {{ currency }}: {{ rates[currency] }}
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-expand-transition>
        </v-card>
    </div>
</template>

<script>
import ratesAPIMixin from '../mixins/ratesAPIMixin';

import allCurrencies from '@/data/currencies';

export default {
    name: 'Rates',
    data() {
        return {
            currencies: allCurrencies,
            selectedCurrencies: ['EUR'],
            rates: this.rates,
        };
    },
    mixins: [ratesAPIMixin],
    created() {
        this.updateRates();
    },
    methods: {
        async updateRates() {
            const response = await this.getRates(allCurrencies);
            this.rates = response.rates;
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
