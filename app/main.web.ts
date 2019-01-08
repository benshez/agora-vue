import Plugings from '~/common/base/plugins/web';
Plugings();

import Vue from 'vue';
import { Config } from '@common/config/Config';
import App from '@components/app/web.vue';
import store from '@common/base/store';
import { routes } from '@views/routes/web';
import Interceptors from '@common/base/interceptors/Interceptors';
import filters from '@common/base/filters';

Interceptors();
filters();

import './styles';

Vue.config.silent = !Config.IS_PRODUCTION();

new Vue({
	el: '#app',
	router: routes,
	store,
	render: (h) => h(App)
});
