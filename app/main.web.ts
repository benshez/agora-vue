import Plugings from '@common/base/plugins/Pluging.web';
Plugings();

import Vue from 'vue';
import App from '@components/app/App.web.vue';
import store from '@common/base/store';

import Interceptors from '@common/base/interceptors/Interceptors';

Interceptors();

import './styles';

Vue.config.silent = false;

new Vue({
	el: '#app',
	store,
	render: (h) => h(App)
});
