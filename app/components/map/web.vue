<template>
  <div class="map-container">
    <vue-mapbox-map
      id="map"
      :access-token="scene.accessToken"
      :interactive="false"
      :geocoder="false"
      :lng="scene.lng"
      :lat="scene.lat"
      :zoom="scene.zoom"
      :pitch="scene.pitch"
      :bearing="scene.bearing"
      @mapbox-ready="setMap"
      @mapbox-destroyed="unsetMap"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import RootState from "@common/base/store/mixins/RootState";
const VueMapboxMap = require("vue-mapbox-map");

@Component({
  mixins: [RootState],
  components: {
    "vue-mapbox-map": VueMapboxMap
  },
  data() {
    return {
      scene: {
        accessToken:
          "pk.eyJ1IjoiYmVuc2hleiIsImEiOiJjajFmZ2ludHMwMGx0MzJ0NDJzbW14MWc5In0.3W8kUIEbiliNAEl85DqD-A",
        lng: -73.984495,
        lat: 40.756027,
        zoom: 13,
        pitch: 20,
        bearing: 0
      },
      entries: []
    };
  },
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
  }
})
export default class AgoraMap extends Vue {
  @Prop(Object) source: String;
}
</script>