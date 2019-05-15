import { VuexModule, Module, Mutation, Action, getModule } from "vuex-module-decorators";
import { Store } from "vuex";
import { Config } from "@common/config/Config";
import { LocationSearchService } from "@common/search/services/LocationSearchService";
import { ILocations } from "@common/search/interfaces/ILocations";
import { GET_LOCATIONS } from "@common/base/store/MutationTypes";

@Module({ name: "Location", namespaced: Config.APP_SETTINGS.STORE_NAMESPACED, })
export default class Location extends VuexModule {
    current: ILocations = null;

    @Mutation [GET_LOCATIONS](loc: ILocations) {
        this.current = loc;
    }

    @Action({ commit: GET_LOCATIONS }) loadLocation(url: string) {
        return new LocationSearchService().GET_LOCATIONS(url);
    }
}

export const getStore = (store?: Store<ILocations>): Location => getModule(Location, store);