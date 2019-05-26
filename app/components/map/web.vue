<template>
  <div style="height: 100%; width: 100%">
    <div class="mapboxgl-map-container">
      <agora-mapbox-map ref="map" :center="rootState.AgoraMapbox.current.center.center"></agora-mapbox-map>
    </div>
    <div v-for="(marker, i) in rootState.AgoraMapbox.current.markers" :key="i">
      <agora-mapbox-popup
        ref="popup"
        :description="marker.description"
        @closeOnClick="onClickChild"
        :closeButton="false"
        :center="marker.center"
        :data-index="i"
      />
      <agora-mapbox-marker ref="marker" :center="marker.center" :data-index="i"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Provide } from "vue-property-decorator";
// import * as mapboxgl from "mapbox-gl";
import RootState from "@common/base/store/mixins/RootState";
import { getStore as getGeoLocationStore } from "@common/location/store";
import { getStore as getConfigStore } from "@common/config/store";
import { IApplicationConfig } from "@common/config/interfaces/IApplicationConfig";
import AgoraMapboxMap from "@components/map/components/ui/map/web.vue";
import AgoraMapboxPopup from "@components/map/components/ui/popup/web.vue";
import AgoraMapboxMarker from "@components/map/components/ui/marker/web.vue";
import { ICenter } from "@common/map/interfaces/ICenter";
import { getStore as getAgoraMapboxStore } from "@common/map/store";

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

    this.getCenter().then((c: any) => {
      let center: ICenter = {
        center: getGeoLocationStore(this.$store).current.center
      };

      getAgoraMapboxStore(this.$store).setMarkers([
        { description: "Me", center: center },
        { description: "A", center: { center: [153.117087, -26.771842] } },
        {
          description: "B",
          center: { center: [153.1139075, -26.766890399999998] }
        }
      ]);

      getAgoraMapboxStore(this.$store).setCenter(center);
    });
  }
})
export default class AgoraMap extends Vue {
  async getCenter() {
    await getGeoLocationStore(this.$store).loadCurrentLocation();
  }
}
</script>

<style lang="scss">
.mapboxgl-map-container {
  width: 100%;
  height: 100%;
}
</style>
