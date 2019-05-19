import { VuexModule, Module, Mutation, Action, getModule } from "vuex-module-decorators";
import { Store } from "vuex";
import { IGeolocation } from "@common/location/interfaces/IGeolocation";
import { GeoLocationService } from "@common/location/services/GeoLocationService";
import { GET_CURRENT_LOCATION, UPDATE_CURRENT_LOCATION } from "@common/base/store/MutationTypes";
import { Config } from "@common/config/Config";

@Module({ name: "GeoLocation", namespaced: Config.APP_SETTINGS.STORE_NAMESPACED, })
export default class GeoLocation extends VuexModule {
  current: IGeolocation = {
    latitude: 0,
    longitude: 0,
    center: [0, 0]
  };

  @Mutation [GET_CURRENT_LOCATION](location: IGeolocation) {
    this.current = location;
  }

  @Mutation [UPDATE_CURRENT_LOCATION](location: IGeolocation) {
    this.current = location;
  }

  @Action({ commit: GET_CURRENT_LOCATION }) async loadCurrentLocation(): Promise<IGeolocation> {
    const coords = await new GeoLocationService().GET_CURRENT_LOCATION();

    return coords
  }

  @Action({ commit: UPDATE_CURRENT_LOCATION }) updateCurrentLocation(location: IGeolocation): IGeolocation {
    return new GeoLocationService().UPDATE_CURRENT_LOCATION(location);
  }
}

export const getStore = (store?: Store<IGeolocation>): GeoLocation => getModule(GeoLocation, store);
