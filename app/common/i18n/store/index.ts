import { VuexModule, Module, Mutation, Action, getModule } from "vuex-module-decorators";
import { Store } from "vuex";
import { ILanguage } from "@common/i18n/interfaces/ILanguage";
import { GET_LANGUAGE } from "@common/base/store/MutationTypes";
import { LanguageService } from "@common/i18n/services/LanguageService";
import { Config } from "@common/config/Config";

@Module({ name: "Language", namespaced: Config.APP_SETTINGS.STORE_NAMESPACED, })
export default class Language extends VuexModule {
  current: ILanguage = new LanguageService().FILTERED_DEFAULT_LANGUAGE();

  @Mutation [GET_LANGUAGE](lang: ILanguage) {
    this.current = lang;
  }

  @Action({ commit: GET_LANGUAGE }) loadLanguage(langKey: string) {
    return new LanguageService().RESOLVE_LANGUAGE(langKey);
  }
}

export const getStore = (store?: Store<ILanguage>): Language => getModule(Language, store);
