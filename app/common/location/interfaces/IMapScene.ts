export interface IMapScene {
    container: string;
    style: string;
    zoom: number;
    pitch: number;
    bearing: number;
    center: mapboxgl.LngLatLike;
}