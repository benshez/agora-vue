import Plugings from '@common/base/plugins/Pluging.web';
Plugings();

import Vue from 'vue';
import App from '@components/app/App.web.vue';
import store from '@common/base/store';
import { routes } from '@components/Routes';
import Interceptors from '@common/base/interceptors/Interceptors';
import filters from '@common/base/filters';

Interceptors();
filters();

import './styles';

Vue.config.silent = false;

new Vue({
	el: '#app',
	router: routes,
	store,
	data: function () {
		return {
			routes: routes
		}
	},
	render: (h) => h(App)
});
