export default {
    methods: {
        async updateRates(currencies, base) {
            const response = await this.getRates(currencies, base);
            this.rates = response.rates;
        },
    },
};
