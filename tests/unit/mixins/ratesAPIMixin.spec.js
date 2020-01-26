import Vue from 'vue';

import ratesAPI from '@/mixins/ratesAPIMixin';

describe('ratesAPIMixin', () => {
    beforeEach(() => {
        fetch.resetMocks()
    });

    it('returns json data', () => {
        fetch.mockResponseOnce(JSON.stringify({
            "base": "USD",
            "rates": {
                "EUR": 0.9062075215
            },
            "date": "2020-01-24"
        }));

        ratesAPI.methods.getRates(['EUR']).then(function(response) {
            expect(response.rates.EUR).toEqual(0.9062075215);
        });
    });
});