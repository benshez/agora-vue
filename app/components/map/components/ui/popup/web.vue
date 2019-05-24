<template>
  <div style="display: none">
    <!-- @slot Slot for popup content -->
    <slot/>
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
import AgoraMapboxPopupBase from "@components/map/components/ui/popup/base";

@Component({
  mixins: [AgoraMapboxPopupBase]
})
export default class AgoraMapboxPopup extends Vue {}
</script>