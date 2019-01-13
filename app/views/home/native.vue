<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Vue Mapbox Example"></ActionBar>
    <GridLayout></GridLayout>
  </Page>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import RootState from "@common/base/store/mixins/RootState";

@Component({
  mixins: [RootState]
})
export default class AgoraHome extends Vue {}
</script>