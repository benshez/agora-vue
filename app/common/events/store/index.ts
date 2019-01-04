import { Module } from 'vuex';
import { IRootState } from '@common/base/store/interfaces/IRootState';
import { IDynanicComponent } from '@common/events/interfaces/IDynanicComponent';
import { mutations } from '@common/events/store/mutation';
import { actions } from '@common/events/store/actions';
import { state } from '@common/events/store/state';
import { getters } from '@common/events/store/getters';
import { Config } from '@common/config/Config';

export const DynamicComponent: Module<IDynanicComponent, IRootState> = {
	namespaced: Config.APP_SETTINGS.STORE_NAMESPACED,
	state,
	getters,
	mutations,
	actions
};
