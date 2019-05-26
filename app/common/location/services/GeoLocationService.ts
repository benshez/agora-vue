

import { GET_CURRENT_LOCATION, UPDATE_CURRENT_LOCATION } from '@common/base/store/MutationTypes';
import { ICenter } from "@common/map/interfaces/ICenter";
export class GeoLocationService {

    public async [GET_CURRENT_LOCATION](): Promise<ICenter> {
        let coords: any = null;

        coords = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        return { center: [coords.coords.longitude, coords.coords.latitude] };
    }

    public [UPDATE_CURRENT_LOCATION](location: ICenter): ICenter {
        return location;
    }
}
