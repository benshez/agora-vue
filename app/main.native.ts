import Plugings from '@common/base/plugins/Pluging.native';
Plugings();

import Vue from 'nativescript-vue';
import { isAndroid, isIOS } from 'tns-core-modules/platform';
import App from '@components/app/App.native.vue';
import store from '@common/base/store';
import { routes } from '@views/routes/native';
import Interceptors from '@common/base/interceptors/Interceptors';
import filters from '@common/base/filters';

Interceptors();
filters();

import './styles';

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = __ENVIRONMENT__ === 'production';
Vue.prototype.$isAndroid = isAndroid;
Vue.prototype.$isIOS = isIOS;
Vue.prototype.$isNative = __IS_NATIVE__ === true;

new Vue({
	store,
	router: routes,
	computed: {
		// pageClasses: function() {
		// 	return {
		// 		'platform-ios': isIOS,
		// 		'platform-android': isAndroid
		// 	};
		// }
	},
	render: (h) => h('frame', [h(App)])
}).$start();
