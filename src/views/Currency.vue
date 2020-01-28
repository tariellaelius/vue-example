<template>
    <v-container fluid >
        <v-row
            justify="center"
        >
            <v-col class="text-center" :sm="6">
                <div class="currency-rates">
                    <h1>{{currency}}</h1>
                    <v-card>
                        <v-expand-transition>
                            <CurrencyTable
                                :currencies="shownCurrencies"
                                :rates="rates"
                            />
                        </v-expand-transition>
                            <v-pagination
                                v-model="page"
                                :length="totalPages"
                            ></v-pagination>
                    </v-card>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import CurrencyTable from '@/components/CurrencyTable.vue';

import updateRatesMixin from '../mixins/updateRatesMixin';
import ratesAPIMixin from '../mixins/ratesAPIMixin';

import allCurrencies from '@/data/currencies';

const currencyPerPage = 10;

export default {
    name: 'Currency',
    data() {
        return {
            currencies: allCurrencies,
            rates: this.rates,
            page: 1,
            totalPages: Math.ceil(allCurrencies.length / currencyPerPage),
        };
    },
    components: {
        CurrencyTable,
    },
    props: ['currency'],
    mixins: [
        updateRatesMixin,
        ratesAPIMixin,
    ],
    mounted() {
        this.updateRates(allCurrencies, this.currency);
    },
    computed: {
        shownCurrencies: {
            get() {
                const startIndex = (this.page - 1) * currencyPerPage;
                const endIndex = this.page * currencyPerPage;
                return this.currencies.slice(startIndex, endIndex);
            },
        },
    },
};
</script>
