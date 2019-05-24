import {
    Component,
    Prop,
    Watch,
    Inject,
    Mixins
} from "vue-property-decorator";
import mapboxgl from "mapbox-gl";
import RootState from "@common/base/store/mixins/RootState";
@Component
export default class AgoraMapboxPopupBase extends Mixins(RootState) {
    @Prop() mapbox: any;
    @Prop() map: any;
    @Prop({ default: true }) closeButton!: boolean;
    @Prop({ default: true }) closeOnClick!: boolean;
    @Prop({ default: true }) initial: boolean;
    @Prop({ default: [0, 0] }) lngLat: mapboxgl.LngLatLike;
    @Prop({ default: "" }) description: string;
    @Prop({ default: null }) popup: mapboxgl.Popup;
    @Prop({ default: [] }) center: mapboxgl.LngLatLike;

    @Watch("center")
    onCenter() {
        this._addPopup();
        this.initial = false;
    }

    created() {
        this._initialisePopup();
    }

    beforeDestroy() {
        this._removePopup();
    }

    remove() {
        this._removePopup();
    }

    _initialisePopup() {
        if (!this.mapbox) return;
        this.popup = new this.mapbox.Popup({
            offset: 25,
            closeButton: this.closeButton,
            closeOnClick: this.closeOnClick
        });
    }

    _addPopup() {
        if (this.map && this.popup) {
            this.popup
                .setLngLat(this.center)
                .setHTML(this.description)
                .addTo(this.map);
        }
    }

    _removePopup() {
        this.popup.remove();
        //this.$_emitEvent("removed");
    }
}