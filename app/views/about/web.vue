<template>

</template>

<script lang="ts">
  import { Vue, Component, Prop } from "vue-property-decorator";

  @Component({})
  export default class AgoraAbout extends Vue {
    @Prop(Object) source: String;
  }
</script>