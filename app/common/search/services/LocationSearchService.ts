import axios from "axios";
import { ILocations } from "@common/search/interfaces/ILocations";
export class LocationSearchService {

    public async GET_LOCATIONS(url: string): Promise<ILocations> {
        const response = await axios.get(url);
        return response.data;
    }
}