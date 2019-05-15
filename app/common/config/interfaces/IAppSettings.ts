import { IApplicationRoutes } from '@common/config/interfaces/IApplicationRoutes';

export interface IAppSettings {
	API: string;
	APP_NAME: string;
	APP_NAME_TO_UPPER: string;
	APP_ROUTES: IApplicationRoutes;
	STORE_NAMESPACED: boolean;
	STORE_STRICT_MODE: boolean;
	APIS: any;
}
