import Vue from "vue";
import VeeValidate from 'vee-validate';
import Vuetify from 'vuetify';
import "babel-polyfill";
export default function () {
    Vue.use(VeeValidate);
    Vue.use(Vuetify, {
        theme: {
            primary: '#b71c1c',
            secondary: '#b0bec5',
            accent: '#8c9eff',
            error: '#b71c1c'
        }
    });
    // Vue.component('date-time-picker', VueCtkDateTimePicker)
}