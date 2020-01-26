<template>
    <div class="home">
        <Rates />
  </div>
</template>

<script>
// @ is an alias to /src
import Rates from '@/components/Rates.vue';

export default {
    name: 'home',
    components: {
        Rates,
    },
};
</script>
