<template>
  <div id="map" style="width: 100%; height: 100%"></div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import * as mapboxgl from "mapbox-gl";
import RootState from "@common/base/store/mixins/RootState";
import { getStore as getGeoLocationStore } from "@common/location/store";
import { getStore as getConfigStore } from "@common/config/store";
import { IGeolocation } from "@common/location/interfaces/IGeolocation";
import { IScene } from "@common/location/interfaces/IScene";
import { IMapScene } from "@common/location/interfaces/IMapScene";
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
  created() {
    let config: IApplicationConfig = getConfigStore(this.$store).current;
    this.scene.accessToken = config.APP_SETTINGS.APIS.MAP_BOX_API().Token;
  }
})
export default class AgoraMap extends Vue {
  @Prop(Object) source: String;
  @Prop(Object) map: mapboxgl.Map;
  @Prop(Object) feature: IGeolocation;
  @Prop(Object) mapScene: IMapScene = {
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    zoom: 13,
    pitch: 20,
    bearing: 0,
    center: [0, 0]
  };
  @Prop(Object) scene: IScene = {
    mapScene: this.mapScene,
    accessToken: "",
    lng: 0,
    lat: 0
  };
  @Prop(Object) location: IGeolocation = null;

  @Prop(Object) symbolLayer: mapboxgl.Layer = {
    id: "places",
    type: "symbol",
    source: null,
    layout: {
      "icon-image": "{icon}-15",
      "icon-allow-overlap": true
    }
  };
  @Prop(Object) symbolLayerSource: mapboxgl.GeoJSONSourceRaw = {
    // @ts-ignore
    source: {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: []
      }
    }
  };

  @Watch("location", { immediate: true, deep: true })
  OnSceneChanged(value: IGeolocation, oldVal: IGeolocation) {
    let self = this;
    if (value && value.latitude !== 0) {
      let config: IApplicationConfig = getConfigStore(this.$store).current;
      // @ts-ignore
      mapboxgl.accessToken = config.APP_SETTINGS.APIS.MAP_BOX_API().Token;

      this.mapScene = {
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        zoom: 13,
        pitch: 20,
        bearing: 0,
        center: value.center
      };

      const map = new mapboxgl.Map(this.mapScene);
      // const popup = new mapboxgl.Popup({
      //   offset: 25,
      //   closeButton: false,
      //   closeOnClick: false
      // }).setText("Construction on the Washington Monument began in 1848.");
      const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
      });

      map.on("load", function() {
        const source: any = {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: self.OnAddGeoJSONLayerSourceFeature(
              value.center,
              "sdasdasd"
            )
          }
        };

        const layer: any = {
          id: "places",
          type: "symbol",
          source: source,
          layout: {
            "icon-image": "{icon}-15",
            "icon-allow-overlap": true
          }
        };

        self.OnAddLayer(map, layer);
      });

      map.on("mouseenter", "places", function(e) {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = "pointer";
        // @ts-ignore
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        // Populate the popup and set its coordinates
        // based on the feature found.
        popup
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(map);
      });

      map.on("mouseleave", "places", function() {
        map.getCanvas().style.cursor = "";
        popup.remove();
      });

      // new mapboxgl.Marker()
      //   .setLngLat(value.center)
      //   //   .setPopup(popup)
      //   .addTo(map);

      // map.addControl(
      //   new mapboxgl.GeolocateControl({
      //     positionOptions: {
      //       enableHighAccuracy: true
      //     },
      //     trackUserLocation: true
      //   })
      // );
    }
  }

  OnAddLayer(map: mapboxgl.Map, layer: mapboxgl.Layer) {
    map.addLayer(layer);
  }

  OnAddGeoJSONLayerSourceFeature(value: any, description: string) {
    return [
      {
        type: "Feature",
        properties: {
          description: description,
          icon: "theatre"
        },
        geometry: {
          type: "Point",
          coordinates: value
        }
      }
    ];
  }
}
</script>