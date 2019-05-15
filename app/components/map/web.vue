<template>
  <div id="map" style="width: 100%; height: 100%"></div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import * as mapboxgl from "mapbox-gl";
import { Map } from "mapbox-gl";
import RootState from "@common/base/store/mixins/RootState";
import { getStore as getGeoLocationStore } from "@common/location/store";
import { getStore as getConfigStore } from "@common/config/store";
import { IGeolocation } from "@common/location/interfaces/IGeolocation";
import { IApplicationConfig } from "@common/config/interfaces/IApplicationConfig";

@Component({
  mixins: [RootState],
  components: {
    //"vue-mapbox-map": Mapbox
  },
  //data() {
  //   return {
  //     scene: {
  //       accessToken: "",
  //       lng: -73.984495,
  //       lat: 40.756027,
  //       zoom: 13,
  //       pitch: 20,
  //       bearing: 0
  //     },
  //     entries: []
  //   };
  // },
  computed: {
    items() {
      return this.entries.map((entry: any) => {
        const Description =
          entry.Description.length > this.descriptionLimit
            ? entry.Description.slice(0, this.descriptionLimit) + "..."
            : entry.Description;

        return Object.assign({}, entry, { Description });
      });
    }
  },
  async created() {
    let config: IApplicationConfig = getConfigStore(this.$store).current;
    let coords: IGeolocation = await getGeoLocationStore(
      this.$store
    ).loadCurrentLocation();
    this.scene.accessToken = config.APP_SETTINGS.APIS.MAP_BOX_API().Token;
    this.scene.lng = coords.longitude;
    this.scene.lat = coords.latitude;
    this.scene.center = coords.center;

    // @ts-ignore
    mapboxgl.accessToken = this.scene.accessToken;
    var map = new mapboxgl.Map({
      container: "map", // container id
      style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
      center: this.scene.center(), // starting position [lng, lat]
      zoom: 13, // starting zoom
      pitch: 20,
      bearing: 0
    });

    var x: mapboxgl.LngLatLike = [coords.longitude, coords.latitude];
    new mapboxgl.Marker().setLngLat(this.scene.center()).addTo(map);
  }
})
export default class AgoraMap extends Vue {
  @Prop(Object) source: String;
  @Prop(Object) scene: any = {
    accessToken: "",
    lng: -73.984495,
    lat: 40.756027,
    zoom: 13,
    pitch: 20,
    bearing: 0,
    center: []
  };
}
</script>