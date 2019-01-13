import Plugings from '~/common/base/plugins/native';
Plugings();

import Vue from 'nativescript-vue';
import { Config } from '@common/config/Config';
import App from '@components/app/native.vue';
import store from '@common/base/store';
import { routes } from '@views/routes/native';
import Interceptors from '@common/base/interceptors/Interceptors';
import filters from '@common/base/filters';

Interceptors();
filters();

import './styles';

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = Config.IS_PRODUCTION();

new Vue({
	router: routes,
	store,
	computed: {
		pageClasses: function() {
			return {
				'platform-ios': Config.IS_IOS(),
				'platform-android': Config.IS_ANDROID()
			};
		}
	},
	render: (h) => h('frame', [ h(App) ])
}).$start();
