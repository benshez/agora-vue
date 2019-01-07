import { ActionTree } from 'vuex';
import _ from 'lodash';
import { ILanguage } from '@common/i18n/interfaces/ILanguage';
import { LanguageService } from '@common/i18n/services/LanguageService';
import { IRootState } from '@common/base/store/interfaces/IRootState';
import { GET_LANGUAGE, UPDATE_LANGUAGE, GET_LANGUAGES } from '@common/base/store/MutationTypes';

export const actions: ActionTree<ILanguage, IRootState> = {
	[GET_LANGUAGE]({ commit }, lang: string) {
		commit(GET_LANGUAGE, new LanguageService().RESOLVE_LANGUAGE(lang));
	},

	[UPDATE_LANGUAGE]({ commit }, lang: string) {
		commit(UPDATE_LANGUAGE, new LanguageService().RESOLVE_LANGUAGE(lang));
	},

	[GET_LANGUAGES](): Array<ILanguage> {
		return new LanguageService().GET_LANGUAGES();
	}
};
