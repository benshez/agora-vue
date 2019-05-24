import {
    Vue,
    Component,
    Prop,
    Mixins,
    Inject
} from "vue-property-decorator";
import * as mapboxgl from "mapbox-gl";
import RootState from "@common/base/store/mixins/RootState";
import { IGeolocation } from "@common/location/interfaces/IGeolocation";

@Component
export default class AgoraMapboxLayerBase extends Mixins(RootState) {
    @Inject() readonly mapbox!: any;
    @Prop({ default: null }) map!: any;
    @Prop({ default: true }) initial: boolean;
    created() {

    }
}