<template>
  <div>
    <v-navigation-drawer fixed v-model="drawerLeft" left temporary app>
      <!-- <v-toolbar
        color="blue-grey"
        dark
        fixed
        flat
      >
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">{{translation.About.Description}}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>-->
      <v-divider></v-divider>
      <v-list dense>
        <v-list-tile @click.stop="left = !drawerLeft">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title
              v-for="(route) in routes"
              :key="route.key"
            >{{ {state: translation, key: route.meta.translationKey} | translate}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue-grey" dark fixed app clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{translation.AppName}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <agora-language-picker :translation="translation"/>
    </v-toolbar>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { mapState } from "vuex";
import { RouteConfig } from "vue-router";
import { GET_ROUTES } from "@common/base/store/MutationTypes";
import { IRootState } from "@common/base/store/interfaces/IRootState";
import { IRoute } from "@common/router/interfaces/IRoute";
import { ITranslation } from "@common/i18n/interfaces/ITranslation";
import AgoraLanguagePicker from "@components/i18n/Languages.web.vue";

@Component({
  components: { AgoraLanguagePicker },
  computed: {
    ...mapState({
      routes: (state: IRootState) => {
        return state.Routes;
      }
    }),
    drawer: {
      get(): boolean {
        return this.drawerLeft;
      },
      set(value: boolean) {
        this.drawerLeft = value;
      }
    }
  }
})
export default class AgoraHeader extends Vue {
  private drawerLeft: Boolean = false;
  @Prop(Object) translation: ITranslation;

  @Watch("drawer")
  onDrawerChanged(value: Boolean, oldValue: Boolean) {
    this.drawerLeft = value;
  }
  @Watch("drawerLeft")
  onDrawerStatusChanged(value: Boolean, oldValue: Boolean) {
    this.$emit("drawerStatus", value);
  }
}
</script>