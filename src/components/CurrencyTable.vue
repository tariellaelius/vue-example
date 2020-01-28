<template>
    <v-simple-table v-if="rates">
        <thead>
            <tr>
                <th class="text-center">Currency</th>
                <th class="text-center">Rate</th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="currency in currencies"
                :key="currency"
            >
                <td>
                    <router-link
                        v-if="linked"
                        :to="currency">
                        {{currency}}
                    </router-link>
                    <span v-else>{{currency}}</span>
                </td>
                <td>{{ rates[currency] }}</td>
            </tr>
        </tbody>
    </v-simple-table>
</template>

<script>
export default {
    name: 'CurrencyTable',
    props: {
        currencies: Array,
        rates: Object,
        linked: Boolean,
    },
};
</script>
