<template>
  <Label :text="rootState.ApplicationConfig.IS_ANDROID()"></Label>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import RootState from "@common/base/store/mixins/RootState";

@Component({
  mixins: [RootState]
})
export default class AgoraAbout extends Vue {}
</script>