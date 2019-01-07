<template>
  <v-tooltip right>
    <v-btn
      icon
      large
      :href="source"
      target="_blank"
      slot="activator"
    >
      <v-icon large>code</v-icon>
    </v-btn>
    <span>Source</span>
  </v-tooltip>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from "vue-property-decorator";

  @Component({})
  export default class AgoraAbout extends Vue {
    @Prop(Object) source: String;
  }
</script>