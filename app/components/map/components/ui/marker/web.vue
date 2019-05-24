<template>
  <div style="display: none">
    <!-- slot for custom marker -->
    <slot name="marker"/>
    <!-- slot for popup -->
    <slot v-if="marker"/>
  </div>
</template>
<script lang="ts">
import {
  Vue,
  Component,
  Prop,
  Watch,
  Inject,
  Provide
} from "vue-property-decorator";
import AgoraMapboxMarkerBase from "@components/map/components/ui/marker/base";

@Component({
  mixins: [AgoraMapboxMarkerBase]
})
export default class AgoraMapboxMarker extends Vue {}
</script>