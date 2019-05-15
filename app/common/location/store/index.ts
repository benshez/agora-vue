import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators';
import { Store } from 'vuex';
import { IGeolocation } from '@common/location/interfaces/IGeolocation';
import { GeoLocationService } from "@common/location/services/GeoLocationService";
import { GET_CURRENT_LOCATION } from '@common/base/store/MutationTypes';
import { Config } from '@common/config/Config';

@Module({ name: 'GeoLocation', namespaced: Config.APP_SETTINGS.STORE_NAMESPACED, })
export default class GeoLocation extends VuexModule {
  current: IGeolocation = null;

  @Mutation [GET_CURRENT_LOCATION](location: IGeolocation) {
    this.current = location;
  }

  @Action({ commit: GET_CURRENT_LOCATION }) async loadCurrentLocation(): Promise<IGeolocation> {
    const coords = await new GeoLocationService().GET_CURRENT_LOCATION();

    return coords
  }
}

export const getStore = (store?: Store<IGeolocation>): GeoLocation => getModule(GeoLocation, store);
