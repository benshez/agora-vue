<template>
  <Mapbox
    :accessToken="rootState.ApplicationConfig.APP_SETTINGS.APIS.MAP_BOX_API().ApiKey"
    mapStyle="traffic_day"
    latitude="37.7397"
    longitude="-121.4252"
    hideCompass="true"
    zoomLevel="12"
    showUserLocation="false"
    disableZoom="false"
    disableRotation="false"
    disableScroll="false"
    disableTilt="false"
    @mapReady="onMapReady($event)"
  ></Mapbox>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import RootState from "@common/base/store/mixins/RootState";

@Component({
  mixins: [RootState],
  data() {
    return {};
  }
})
export default class AgoraMap extends Vue {
  onMapReady(args: any) {
    args.map.addMarkers([
      {
        lat: 37.7397,
        lng: -121.4252,
        title: "Tracy, CA",
        subtitle: "Home of The Polyglot Developer!"
        // onCalloutTap: () => {
        //     utils.openUrl("https://www.thepolyglotdeveloper.com");
        // }
      }
    ]);
  }
}
</script>