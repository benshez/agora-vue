import { RouteConfig } from 'vue-router';

export interface IRoute extends RouteConfig {
	meta?: {
		translationKey: string;
		description: string;
	};
}
