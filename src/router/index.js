import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Currency from '../views/Currency.vue';
import ConnectionError from '../views/ConnectionError.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/connection-error',
        name: 'connection-error',
        component: ConnectionError,
    },
    {
        path: '/:currency',
        name: 'currency',
        component: Currency,
        props: true,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
