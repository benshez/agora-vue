<template>
  <agora-header ref="drawer" />
</template>

<script lang="ts">
  import { Vue, Component, Prop } from "vue-property-decorator";
  import RootState from "@common/base/store/mixins/RootState";
  import AgoraHeader from "@components/header/native.vue";

  @Component({
    mixins: [RootState],
    components: {
      AgoraHeader
    }
  })
  export default class App extends Vue {}
</script>