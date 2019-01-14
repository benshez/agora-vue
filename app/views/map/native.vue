<template>
  <GridLayout class="body">
    <Label text="AgoraAbout"></Label>

  </GridLayout>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from "vue-property-decorator";
  import RootState from "@common/base/store/mixins/RootState";

  @Component({
    mixins: [RootState]
  })
  export default class AgoraMap extends Vue {}
</script>