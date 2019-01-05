<template>
  <div>
    <v-navigation-drawer fixed v-model="drawerLeft" left temporary app>
      <v-toolbar color="blue-grey" dark fixed flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">{{translation.About.Description}}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-tile @click.stop="left = !drawerLeft">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Open Temporary Drawer</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue-grey" dark fixed app clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Toolbar</v-toolbar-title>
      <v-spacer></v-spacer>
      <agora-language-picker/>
    </v-toolbar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AgoraLanguagePicker from "@components/i18n/Languages.web.vue";

export default Vue.extend({
  name: "agora-header",
  components: { AgoraLanguagePicker },
  props: {
    translation: {}
  },
  data: () => ({
    drawerLeft: false
  }),
  watch: {
    drawer(value) {
      this.drawerLeft = value;
    },
    drawerLeft(value) {
      this.$emit("drawerStatus", value);
    }
  },
  computed: {
    drawer: {
      get(): boolean {
        return this.drawerLeft;
      },
      set(value: boolean) {
        this.drawerLeft = value;
      }
    }
  }
});
</script>