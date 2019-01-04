import { RouteConfig } from 'vue-router';
import { IRootState } from '@common/base/store/interfaces/IRootState';

export interface IDisplayRoutesParameters {
	routes: Array<RouteConfig>;
	state: IRootState;
}
