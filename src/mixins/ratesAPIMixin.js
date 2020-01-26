const endpoint = 'https://api.ratesapi.io/api/latest';

export default {
    methods: {
        getRates(currencies) {
            return fetch(`${endpoint}?base=USD&symbols=${currencies.join(',')}`)
                .then(response => response.json());
        },
    },
};
