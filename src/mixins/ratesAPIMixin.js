const endpoint = 'https://api.ratesapi.io/api/latest';

export default {
    methods: {
        getRates(currencies, base = 'USD') {
            const filteredCurrencies = currencies.filter(c => c !== base);
            return fetch(`${endpoint}?base=${base}&symbols=${filteredCurrencies.join(',')}`)
                .then(response => response.json())
                .catch(() => this.$router.push('connection-error'));
        },
    },
};
