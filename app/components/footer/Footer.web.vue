<template>
  <v-footer
    color="blue-grey"
    class="white--text"
    app
  >
    <span>{{translation.AppName}}</span>
    <v-spacer></v-spacer>
    <span>{{translation.CopyRight()}}</span>
  </v-footer>
</template>

<script lang="ts">
  import Vue from "vue";
  export default Vue.extend({
    name: "AgoraFooter",
    props: {
      translation: {}
    }
  });
</script>

