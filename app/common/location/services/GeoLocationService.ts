
import { IGeolocation } from "@common/location/interfaces/IGeolocation";

export class GeoLocationService {

    public async GET_CURRENT_LOCATION(): Promise<any> {
        let coords: any = null;

        coords = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const postion: IGeolocation = {
            latitude: coords.coords.latitude,
            longitude: coords.coords.longitude,
            center: (c: Array<number>) => [coords.coords.longitude, coords.coords.latitude]
        };

        return postion;
    }
}
