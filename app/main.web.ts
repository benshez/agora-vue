import Vue from 'vue';

import store from '@common/base/store';

import HelloWorld from '@components/HelloWorld.web.vue';

import './styles';

Vue.config.silent = false;

new Vue({
	el: '#app',
	store,
	render: (h) => h(HelloWorld)
});
