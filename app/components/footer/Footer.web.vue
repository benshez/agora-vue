<template>
  <v-footer color="blue-grey" class="white--text" app>
    <span>{{translation.AppName}}</span>
    <v-spacer></v-spacer>
    <span>&copy; 2017</span>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "agora-footer",
  props: {
    translation: {}
  }
});
</script>

