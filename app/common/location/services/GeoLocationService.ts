
import { IGeolocation } from "@common/location/interfaces/IGeolocation";
import { GET_CURRENT_LOCATION, UPDATE_CURRENT_LOCATION } from '@common/base/store/MutationTypes';

export class GeoLocationService {

    public async [GET_CURRENT_LOCATION](): Promise<any> {
        let coords: any = null;

        coords = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const postion: IGeolocation = {
            latitude: coords.coords.latitude,
            longitude: coords.coords.longitude,
            center: [coords.coords.longitude, coords.coords.latitude]
        };

        return postion;
    }

    public [UPDATE_CURRENT_LOCATION](location: IGeolocation): IGeolocation {
        const postion: IGeolocation = {
            latitude: location.latitude,
            longitude: location.longitude,
            center: [location.longitude, location.latitude]
        };

        return postion;
    }
}
