import { IAppSettings } from '@common/config/interfaces/IAppSettings';
import { IApplicationConfig } from '~/common/config/interfaces/IApplicationConfig';

export class Config implements IApplicationConfig {
	public static IS_PRODUCTION(): boolean {
		return __ENVIRONMENT__ === 'production';
	}

	public static IS_DEV(): boolean {
		return __ENVIRONMENT__ === 'development';
	}

	public static IS_NATIVE(): boolean {
		return __IS_NATIVE__;
	}

	public static IS_ANDROID(): boolean {
		return __IS_ANDROID__;
	}

	public static IS_IOS(): boolean {
		return __IS_IOS__;
	}

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
