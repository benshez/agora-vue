import { IAppSettings } from '@common/config/interfaces/IAppSettings';

export class Config {
	public static APP_SETTINGS: IAppSettings = {
		API: '', //AgoraConfiguration.APP_API(),
		APP_NAME: 'Agora',
		APP_NAME_TO_UPPER: 'AGORA',
		APP_ROUTES: {
			LOGIN_ROUTE: '', //`${AgoraConfiguration.APP_API()}/user/login`,
			ADD_USER_ROUTE: '', //`${AgoraConfiguration.APP_API()}/user`,
			GET_USER_ROLES_ROUTE: '' //`${AgoraConfiguration.APP_API()}/roles/`
		},
		STORE_NAMESPACED: true,
		STORE_STRICT_MODE: true
	};
}
