<template>
  <div class="mapboxgl-map-container">
    <agora-mapbox-map ref="map" :center.sync="center">
      <agora-mapbox-popup
        ref="popup"
        :mapbox="mapbox"
        :map="map"
        :description="'Hello world'"
        @closeOnClick="onClickChild"
        :closeButton="false"
        :center.sync="center"
      />
      <agora-mapbox-marker
        ref="marker"
        :mapbox="mapbox"
        :map="map"
        :popup="popup"
        :center.sync="center"
      />
    </agora-mapbox-map>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Provide } from "vue-property-decorator";
import * as mapboxgl from "mapbox-gl";
import RootState from "@common/base/store/mixins/RootState";
import { getStore as getGeoLocationStore } from "@common/location/store";
import { getStore as getConfigStore } from "@common/config/store";
import { IApplicationConfig } from "@common/config/interfaces/IApplicationConfig";
import AgoraMapboxMap from "@components/map/components/ui/map/web.vue";
import AgoraMapboxPopup from "@components/map/components/ui/popup/web.vue";
import AgoraMapboxMarker from "@components/map/components/ui/marker/web.vue";
let mapBoxMap: mapboxgl.Map;
@Component({
  mixins: [RootState],
  components: {
    AgoraMapboxMap,
    AgoraMapboxPopup,
    AgoraMapboxMarker
  },

  computed: {},
  created() {
    let config: IApplicationConfig = getConfigStore(this.$store).current;

    this.getCenter().then(() => {
      this.popupContainer = this.$refs.popup;
      this.popup = this.popupContainer.popup;
      this.center = getGeoLocationStore(this.$store).current.center;
    });
  }
})
export default class AgoraMap extends Vue {
  @Prop() mapbox: any;
  @Prop({ default: null }) map: mapboxgl.Map;
  @Prop({ default: null }) popup: any;
  @Prop({ default: null }) mapContainer: any;
  @Prop({ default: null }) popupContainer: any;
  @Prop({ default: [0, 0] }) center: mapboxgl.LngLatLike;

  async getCenter() {
    await getGeoLocationStore(this.$store).loadCurrentLocation();
  }

  mounted() {
    this.mapContainer = this.$refs.map;
  }
  onClickChild() {}

  @Watch("mapContainer")
  OnMap(map: any) {
    this.mapbox = map.mapbox;
    this.map = map.map;
  }
}
</script>

<style lang="scss">
.mapboxgl-map-container {
  width: 100%;
  height: 100%;
}
</style>
