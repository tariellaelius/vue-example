<template>
  <div class="currency-rates">
      <h1>Currency Rates</h1>
      <div class="rates">
          <ul>
              <li v-for="(value, rate) in rates" v-bind:key="rate">
                  {{ rate }}: {{ value }}
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import ratesAPIMixin from '../mixins/ratesAPIMixin';

export default {
    name: 'Rates',
    data() {
        return {
            selectedCurrencies: ['EUR'],
            rates: this.rates,
        };
    },
    mixins: [ratesAPIMixin],
    created() {
        this.updateRates();
    },
    methods: {
        async updateRates() {
            const response = await this.getRates(this.selectedCurrencies);
            this.rates = response.rates;
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
