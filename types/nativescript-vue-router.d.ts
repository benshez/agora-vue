import * as VueRouter from 'vue-router';
declare module 'vue-router/types/router' {

	interface RouterOptions {
		/**
		 * NativeScript option
		 * switches the router to use the navigation stack to navigate between pages
		*/
		pageRouting?: boolean;
		options?: any;
	}
}