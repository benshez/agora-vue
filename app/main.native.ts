import Vue from 'nativescript-vue';
import VueDevtools from 'nativescript-vue-devtools';

import HelloWorld from '@components/HelloWorld.native.vue';

import './styles';

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === 'production';

Vue.use(VueDevtools);

new Vue({
	render: (h) => h('frame', [h(HelloWorld)])
}).$start();
