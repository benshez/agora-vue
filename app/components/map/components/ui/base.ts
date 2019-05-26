import {
    Vue,
    Component,
    Prop,
    Mixins,
    Provide,
    Inject
} from "vue-property-decorator";
import mapboxgl from "mapbox-gl";
import RootState from "@common/base/store/mixins/RootState";
import { getStore as getConfigStore } from "@common/config/store";
import { IApplicationConfig } from "@common/config/interfaces/IApplicationConfig";
import { IMapScene } from "@common/location/interfaces/IMapScene";

@Component
export default class AgoraMapboxBase extends Mixins(RootState) {
    @Provide() mapbox: any;
    @Provide() map: mapboxgl.Map;
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

    created() {
        this.mapboxInit();
    }

    mapboxInit() {
        if (this.mapbox) return;

        let config: IApplicationConfig = getConfigStore(this.$store).current;

        // @ts-ignore
        mapboxgl.accessToken = config.APP_SETTINGS.APIS.MAP_BOX_API().Token;

        this.mapbox = mapboxgl;
    }

    getMap() {
        if (!this.map) {
            let map: any = this.$parent.$refs.map;
            this.map = map.map;
        }

        return this.map;
    }

    getPopup(dataIndex: number) {
        let popup: any = this.$parent.$refs.popup;

        popup = popup[dataIndex].popup;

        return (popup) ? popup : null;
    }
}