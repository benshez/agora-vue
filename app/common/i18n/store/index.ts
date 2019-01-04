import { Module } from 'vuex';
import { IRootState } from '@common/base/store/interfaces/IRootState';
import { ILanguage } from '@common/i18n/interfaces/ILanguage';
import { mutations } from '@common/i18n/store/mutations';
import { actions } from '@common/i18n/store/actions';
import { state } from '@common/i18n/store/state';
import { getters } from '@common/i18n/store/getters';
import { Config } from '@common/config/Config';

export const Language: Module<ILanguage, IRootState> = {
	namespaced: Config.APP_SETTINGS.STORE_NAMESPACED,
	state,
	getters,
	mutations,
	actions
};
