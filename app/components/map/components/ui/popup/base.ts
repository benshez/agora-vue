import {
    Component,
    Prop,
    Watch,
    Inject,
    Mixins
} from "vue-property-decorator";
import mapboxgl from "mapbox-gl";
import AgoraMapboxBase from "@components/map/components/ui/base";
import { ICenter } from "@common/map/interfaces/ICenter";
@Component
export default class AgoraMapboxPopupBase extends Mixins(AgoraMapboxBase) {
    @Inject("mapbox") readonly mapbox: any;
    @Inject("map") map: mapboxgl.Map;
    @Prop({ default: null }) popup: mapboxgl.Popup;
    @Prop({ default: null }) marker: mapboxgl.Marker;
    @Prop({ default: null }) center: ICenter;
    @Prop() dataIndex: number;
    @Prop({ default: true }) closeButton!: boolean;
    @Prop({ default: true }) closeOnClick!: boolean;
    @Prop({ default: "" }) description: string;
    @Prop({ default: 25 }) offset: number;

    created() {
        this.popupInit();

        if (this.center) {
            this.popupUpdate();
        }
    }

    beforeDestroy() {
        this.popupRemove();
    }

    remove() {
        this.popupRemove();
    }

    markerInit() {
        if (!this.mapbox) return;
        this.marker = new this.mapbox.Marker(this.offset);
    }

    popupInit() {
        if (!this.mapbox) return;

        this.popup = new this.mapbox.Popup({
            offset: 25,
            closeButton: this.closeButton,
            closeOnClick: this.closeOnClick
        });
    }

    popupUpdate() {

        if (this.getMap() && this.popup) {
            this.popup
                .setText(this.description);
        }
    }

    popupRemove() {
        this.popup.remove();
        //this.$_emitEvent("removed");
    }
}