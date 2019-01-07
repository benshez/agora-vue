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

// import { VuexModule, Module, Mutation, getModule } from 'vuex-module-decorators';
// import store from '@common/base/store';

// @Module({ dynamic: true, name: 'Language', namespaced: true, store })
// class Language extends VuexModule {
// 	@Mutation
// 	[GET_LANGUAGE](state: ILanguage, lang: ILanguage) {
// 		Object.assign(state, lang);
// 		return lang;
// 	}

// 	@Mutation
// 	[UPDATE_LANGUAGE](state: ILanguage, lang: ILanguage) {
// 		Object.assign(state, lang);
// 	}
// }

// const language = getModule(Language);
// export default language;
