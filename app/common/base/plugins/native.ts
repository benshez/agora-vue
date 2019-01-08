import * as Vue from 'nativescript-vue';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { RadListView } from 'nativescript-ui-listview';
import { Mapbox } from 'nativescript-mapbox';
//import VueDevtools from 'nativescript-vue-devtools';

export default function() {
	Vue.registerElement('RadSideDrawer', () => RadSideDrawer);
	Vue.registerElement('RadListView', () => RadListView);
	Vue.registerElement('Mapbox', () => Mapbox);
	//Vue.use(VueDevtools);
}
