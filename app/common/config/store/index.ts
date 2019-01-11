import { Module } from 'vuex';
import { IRootState } from '@common/base/store/interfaces/IRootState';
import { IAppConfig } from '@common/config/interfaces/IAppConfig';
import { mutations } from '@common/router/store/mutation';
import { actions } from '@common/router/store/actions';
import { state } from '@common/router/store/state';
import { getters } from '@common/router/store/getters';
import { Config } from '@common/config/Config';

export const AppConfig: Module<Array<IAppConfig>, IRootState> = {
	namespaced: Config.APP_SETTINGS.STORE_NAMESPACED,
	state,
	getters,
	mutations,
	actions
};
