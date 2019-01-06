import Plugings from '@common/base/plugins/Pluging.native';
Plugings();

import Vue from 'nativescript-vue';
import platformModule from 'tns-core-modules/platform';
import App from '@components/app/App.native.vue';

import './styles';

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = __TNS_ENV__ === 'production';
Vue.prototype.$isAndroid = platformModule.isAndroid;
Vue.prototype.$isIOS = platformModule.isIOS;

new Vue({
	computed: {
		pageClasses: function () {
			return {
				'platform-ios': platformModule.isIOS,
				'platform-android': platformModule.isAndroid
			};
		}
	},
	render: (h) => h('frame', [h(App)])
}).$start();
