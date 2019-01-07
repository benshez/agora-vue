import Plugings from '@common/base/plugins/Pluging.web';
Plugings();

import Vue from 'vue';
import App from '@components/app/App.web.vue';
import store from '@common/base/store';
import { routes } from '@views/routes/web';
import Interceptors from '@common/base/interceptors/Interceptors';
import filters from '@common/base/filters';

Interceptors();
filters();

import './styles';

Vue.config.silent = __ENVIRONMENT__ === 'production';
Vue.prototype.$isNative = __IS_NATIVE__ === true;

new Vue({
	el: '#app',
	router: routes,
	store,
	render: (h) => h(App)
});
