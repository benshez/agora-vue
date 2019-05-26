
import { IMarkers } from "@common/map/interfaces/IMarkers";
import { ICenter } from "@common/map/interfaces/ICenter";
export interface IAgoraMapbox {
    center: ICenter;

    markers: Array<IMarkers>
}