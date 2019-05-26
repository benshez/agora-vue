import { VuexModule, Module, Mutation, Action, getModule } from "vuex-module-decorators";
import { Store } from "vuex";
import { GeoLocationService } from "@common/location/services/GeoLocationService";
import { GET_CURRENT_LOCATION, UPDATE_CURRENT_LOCATION } from "@common/base/store/MutationTypes";
import { Config } from "@common/config/Config";
import { ICenter } from "@common/map/interfaces/ICenter";

@Module({ name: "GeoLocation", namespaced: Config.APP_SETTINGS.STORE_NAMESPACED, })
export default class GeoLocation extends VuexModule {
  current: ICenter = {
    center: null
  }


  @Mutation [GET_CURRENT_LOCATION](location: ICenter) {
    this.current.center = location.center;
  }

  @Mutation [UPDATE_CURRENT_LOCATION](location: ICenter) {
    this.current.center = location.center;
  }

  @Action({ commit: GET_CURRENT_LOCATION }) async loadCurrentLocation(): Promise<ICenter> {
    const coords = await new GeoLocationService().GET_CURRENT_LOCATION();
    return coords
  }

  @Action({ commit: UPDATE_CURRENT_LOCATION }) updateCurrentLocation(location: ICenter): ICenter {
    return new GeoLocationService().UPDATE_CURRENT_LOCATION(location);
  }
}

export const getStore = (store?: Store<mapboxgl.LngLatLike>): GeoLocation => getModule(GeoLocation, store);
