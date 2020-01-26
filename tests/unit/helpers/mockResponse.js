export default function mockRatesResponse() {
    fetch.mockResponseOnce(JSON.stringify({
        "base": "USD",
        "rates": {
            "EUR": 0.9062075215,
            'GBP': 0.84313,
        },
        "date": "2020-01-24"
    }));
}