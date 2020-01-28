<template>
    <v-card>
        <v-card-title class='headline'>Search for Currencies</v-card-title>
        <v-card-text>
            <v-autocomplete
                v-model='selectedCurrencies'
                :items='currencies'
                multiple
                hide-no-data
                hide-selected
                label='Currencies'
                placeholder='Start typing to Search'
            ></v-autocomplete>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                @click="$parent.$emit('SwitchComponent', 'Rates')">
                Finish
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import allCurrencies from '@/data/currencies';

export default {
    name: 'Search',
    data() {
        return {
            currencies: allCurrencies,
        };
    },
    computed: {
        selectedCurrencies: {
            get() {
                return this.$store.state.selectedCurrencies;
            },
            set(value) {
                this.$store.commit('setSelectedCurrencies', value);
            },
        },
    },
};
</script>
