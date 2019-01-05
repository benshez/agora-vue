// import Es6Promise from 'es6-promise';
// Es6Promise.polyfill();

import Vue from 'vue';
import App from '~/App.web.vue';
import store from '@common/base/store';
import Plugings from '@common/base/plugins/Pluging';
import Interceptors from '@common/base/interceptors/Interceptors';


Plugings();
Interceptors();

import './styles';

Vue.config.silent = false;

new Vue({
	el: '#app',
	store,
	render: (h) => h(App)
});
