import {
    Component,
    Mixins,
    Watch,
    Inject,
    Provide,
    Prop
} from "vue-property-decorator";
import mapboxgl from "mapbox-gl";
import AgoraMapboxBase from "@components/map/components/ui/base";
import { ICenter } from "@common/map/interfaces/ICenter";

@Component
export default class AgoraMapboxMapBase extends Mixins(AgoraMapboxBase) {
    @Inject("mapbox") readonly mapbox: any;
    @Inject("map") map: mapboxgl.Map;
    @Prop({ default: null }) center: mapboxgl.LngLatLike;

    @Watch("center")
    onCenter(center: any) {
        this.mapScene.center = {
            lat: center[1],
            lng: center[0]
        };
        this.mapUpdate();
    }
    mounted() {
        this.mapInit();
    }

    mapInit() {
        if (!this.mapbox) this.mapboxInit();
        this.map = new this.mapbox.Map(this.mapScene);
    }

    mapUpdate() {
        if (!this.map) this.mapInit();

        this.map
            .setCenter(this.mapScene.center);
    }

}