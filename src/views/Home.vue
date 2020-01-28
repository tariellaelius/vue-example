<template>
    <v-container fluid >
        <v-row
            justify="center"
        >
            <v-col class="text-center" :sm="6">
                <div class="currency-rates">
                    <h1>Currency Rates</h1>
                    <component :is="activeComponent"></component>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
// @ is an alias to /src
import Rates from '@/components/Rates.vue';
import Search from '@/components/Search.vue';

export default {
    name: 'home',
    components: {
        Rates,
        Search,
    },
    data() {
        return {
            activeComponent: 'Rates',
        };
    },
    created() {
        this.$on('SwitchComponent', (component) => {
            this.activeComponent = component;
        });
    },
};
</script>
