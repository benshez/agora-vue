<template>
  <div class="mgl-map-wrapper">
    <div v-once id="container" ref="container"></div>
    <slot v-if="initialized"/>
  </div>
</template>
<script lang="ts">
import {
  Vue,
  Component,
  Prop,
  Watch,
  Inject,
  Provide,
  Emit
} from "vue-property-decorator";
import AgoraMapboxMapBase from "@components/map/components/ui/map/base";

@Component({
  mixins: [AgoraMapboxMapBase]
})
export default class AgoraMapboxMap extends Vue {}
</script>
<style lang="scss" scoped>
.mgl-map-wrapper {
  height: 100%;
  position: relative;
  width: 100%;

  .mapboxgl-map {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
}
</style>
