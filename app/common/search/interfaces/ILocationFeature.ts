import { ILocationContext } from "@common/search/interfaces/ILocationContext";
import { ILocationProperties } from "@common/search/interfaces/ILocationProperties";
import { ILocationGeometry } from "@common/search/interfaces/ILocationGeometry";

export interface ILocationFeature {
    bbox: Array<number>;
    center: Array<number>;
    context: Array<ILocationContext>;
    geometry: ILocationGeometry;
    id: string;
    place_name: string;
    place_type: Array<string>;
    properties: ILocationProperties;
    relevance: number;
    text: string;
    type: string;
}