import { IMapScene } from "@common/location/interfaces/IMapScene";

export interface IScene {
    accessToken: string;
    lng: number;
    lat: number;
    mapScene: IMapScene;
}