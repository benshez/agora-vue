import { ILocationContext } from "@common/search/interfaces/ILocationContext";
import { ILocationProperties } from "@common/search/interfaces/ILocationProperties";

export interface ILocationFeature {
    bbox: Array<number>;
    center: Array<number>;
    context: Array<ILocationContext>;
    id: string;
    place_name: string;
    place_type: Array<string>;
    properties: ILocationProperties;
    relevance: number;
    text: string;
    type: string;
}