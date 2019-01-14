<template>
  <agora-search />
</template>

<script lang="ts">
  import { Vue, Component, Prop } from "vue-property-decorator";
  import AgoraSearch from "@components/search/web.vue";

  @Component({
    components: {
      AgoraSearch
    }
  })
  export default class AgoraMap extends Vue {
    @Prop(Object) source: String;
  }
</script>