<template>
  <Label :text="!this.$store.state.ApplicationConfig.IS_ANDROID()"></Label>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class AgoraAbout extends Vue {}
</script>