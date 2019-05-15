import { VuexModule, Module, Mutation, Action, MutationAction, getModule } from "vuex-module-decorators";
import { Store } from "vuex";
import { IApplicationConfig, } from "@common/config/interfaces/IApplicationConfig";
import { Config } from "@common/config/Config";

@Module({ name: "ApplicationConfiguration", namespaced: Config.APP_SETTINGS.STORE_NAMESPACED, })
export default class ApplicationConfiguration extends VuexModule {
  current: IApplicationConfig = { ...Config }

}

export const getStore = (store?: Store<IApplicationConfig>): ApplicationConfiguration => getModule(ApplicationConfiguration, store);
