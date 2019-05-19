<template>
  <div style="width: 100%; height: 100%">
    <agora-search/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import AgoraSearch from "@components/search/web.vue";

@Component({
  components: {
    AgoraSearch
  }
})
export default class AgoraMapView extends Vue {
  @Prop(Object) source: String;
}
</script>