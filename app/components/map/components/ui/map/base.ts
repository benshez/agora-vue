import {
    Vue,
    Component,
    Prop,
    Provide,
    Mixins,
    Watch
} from "vue-property-decorator";
import * as mapboxgl from "mapbox-gl";
import RootState from "@common/base/store/mixins/RootState";
import { getStore as getConfigStore } from "@common/config/store";
import { IApplicationConfig } from "@common/config/interfaces/IApplicationConfig";
import { IMapScene } from "@common/location/interfaces/IMapScene";
@Component
export default class AgoraMapboxMapBase extends Mixins(RootState) {
    @Prop() mapbox: any = mapboxgl;
    @Prop({ default: null }) map!: mapboxgl.Map;
    @Prop({ default: true }) initial: boolean;
    @Prop({ default: false }) initialized: boolean;
    @Prop({ default: [] }) center: mapboxgl.LngLatLike;
    @Prop({
        default: {
            container: "container",
            style: "mapbox://styles/mapbox/streets-v11",
            zoom: 13,
            pitch: 20,
            bearing: 0,
            center: [0, 0],
            attributionControl: false
        }
    }) mapScene: IMapScene;

    @Watch("center")
    onCenter(center: mapboxgl.LngLatLike) {
        this.mapScene.center = center;
        this.map.setCenter(center);
        this.initial = false;
    }
    mounted() {
        this._addMap();
    }
    _addMap() {
        if (this.initialized) return;

        let config: IApplicationConfig = getConfigStore(this.$store).current;

        // @ts-ignore
        mapboxgl.accessToken = config.APP_SETTINGS.APIS.MAP_BOX_API().Token;

        this.map = new mapboxgl.Map(this.mapScene);

        this.initialized = true;
    }
}