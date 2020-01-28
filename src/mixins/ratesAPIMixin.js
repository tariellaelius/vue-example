const endpoint = 'https://api.ratesapi.io/api/latest';

export default {
    methods: {
        getRates(currencies, base = 'USD') {
            return fetch(`${endpoint}?base=${base}&symbols=${currencies.join(',')}`)
                .then(response => response.json())
                .catch(() => this.$router.push('connection-error'));
        },
    },
};
