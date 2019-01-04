import { MutationTree } from 'vuex';
import { GET_LANGUAGE, UPDATE_LANGUAGE } from '@common/base/store/MutationTypes';
import { ILanguage } from '@common/i18n/interfaces/ILanguage';

export const mutations: MutationTree<ILanguage> = {
	[GET_LANGUAGE](state: ILanguage, lang: ILanguage) {
		Object.assign(state, lang);
		return lang;
	},
	[UPDATE_LANGUAGE](state: ILanguage, lang: ILanguage) {
		Object.assign(state, lang);
	}
};
