import { Module } from 'vuex';
import { IRootState } from '@common/base/store/interfaces/IRootState';
import { IApplicationConfig } from '~/common/config/interfaces/IApplicationConfig';
import { mutations } from '@common/config/store/mutation';
import { actions } from '@common/config/store/actions';
import { state } from '@common/config/store/state';
import { getters } from '@common/config/store/getters';
import { Config } from '@common/config/Config';

export const ApplicationConfig: Module<IApplicationConfig, IRootState> = {
	namespaced: Config.APP_SETTINGS.STORE_NAMESPACED,
	state,
	getters,
	mutations,
	actions
};
