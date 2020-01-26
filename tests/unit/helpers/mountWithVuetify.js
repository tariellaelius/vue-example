import { mount } from '@vue/test-utils';
import { createLocalVue } from '@vue/test-utils';

const localVue = createLocalVue();

export default function mountWithVuetify(component, vuetify) {
    return mount(component, {
        localVue,
        vuetify,
    });
}