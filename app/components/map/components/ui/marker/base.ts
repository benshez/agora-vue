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
export default class AgoraMapboxMarkerBase extends Mixins(RootState) {
    @Prop() mapbox: any;
    @Prop({ default: null }) map!: mapboxgl.Map;
    @Prop({ default: 25 }) offset: number;
    @Prop({ default: true }) coordinates: [];
    @Prop(Object) color: string
    @Prop({ default: "center" }) anchor: string;
    @Prop({ default: false }) draggable: boolean;
    @Prop({ default: null }) marker: mapboxgl.Marker;
    @Prop({ default: null }) popup: mapboxgl.Popup;
    @Prop({ default: [] }) center: mapboxgl.LngLatLike;

    @Watch("center")
    onMCenter() {
        this._addMarker();
    }

    created() {
        this._initialiseMarker();
    }

    beforeDestroy() {
        this._removeMarker();
    }

    remove() {
        this._removeMarker();
    }

    _initialiseMarker() {
        if (!this.mapbox) return;
        this.marker = new this.mapbox.Marker(this.offset);
    }

    _addMarker() {
        if (this.map && this.popup) {
            this.marker
                .setLngLat(this.center)
                .setPopup(this.popup)
                .addTo(this.map);
        }
    }


    _removeMarker() {
        this.marker.remove();
        //this.$_emitEvent("removed");
    }
}