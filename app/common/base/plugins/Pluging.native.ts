import Vue, { registerElement } from 'nativescript-vue';
//import VueDevtools from 'nativescript-vue-devtools';

registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer);
registerElement('RadListView', () => require('nativescript-ui-listview').RadListView);

export default function() {
	//Vue.use(VueDevtools);
}
