import { ILocationFeature } from "@common/search/interfaces/ILocationFeature";

export interface ILocations {
    attribution: string;
    features: Array<ILocationFeature>;
    query: Array<string>;
    type: string;
}

