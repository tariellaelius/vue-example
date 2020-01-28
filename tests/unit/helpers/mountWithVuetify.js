import { mount } from '@vue/test-utils';
import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

const localVue = createLocalVue();

localVue.use(Vuex);

export default function mountWithVuetify(component, { 
    stubs = ['router-link'],
    vuetify,
    store,
}) {
    return mount(component, {
        stubs: ['router-link'],
        localVue,
        vuetify,
        store,
    });
}