import * as mapboxgl from "mapbox-gl";
export interface IGeolocation {
    latitude: number;
    longitude: number;
    center: (coords: Array<number>) => mapboxgl.LngLatLike;
}