import {
    Component,
    Prop,
    Watch,
    Inject,
    Mixins
} from "vue-property-decorator";
import AgoraMapboxBase from "@components/map/components/ui/base";
import mapboxgl from "mapbox-gl";
import { ICenter } from "@common/map/interfaces/ICenter";

@Component
export default class AgoraMapboxMarkerBase extends Mixins(AgoraMapboxBase) {
    @Inject("mapbox") readonly mapbox: any;
    @Inject("map") map: mapboxgl.Map;
    @Inject("marker") marker: mapboxgl.Marker;
    @Inject("popup") popup: mapboxgl.Popup;
    @Prop({ default: null }) center: ICenter;
    @Prop() dataIndex: number;
    @Prop({ default: 25 }) offset: number;
    @Prop({ default: true }) coordinates: [];
    @Prop(Object) color: string
    @Prop({ default: "center" }) anchor: string;
    @Prop({ default: false }) draggable: boolean;

    created() {
        this.markerInit();
    }

    mounted() {
        if (this.center) this.markerUpdate();
    }
    beforeDestroy() {
        this.markerRemove();
    }

    remove() {
        this.markerRemove();
    }

    markerInit() {
        if (!this.mapbox) return;
        this.marker = new this.mapbox.Marker(this.offset);
    }

    markerUpdate() {
        let popup = this.getPopup(this.dataIndex);
        let center = {
            lat: this.center.center[1],
            lng: this.center.center[0]
        };
        if (this.getMap() && popup) {
            this.marker
                .setLngLat(center)
                .setPopup(popup)
                .addTo(this.map);
        }
    }


    markerRemove() {
        this.marker.remove();
        //this.$_emitEvent("removed");
    }
}