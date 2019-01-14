<template>
  <div>
    <v-navigation-drawer
      fixed
      v-model="drawerLeft"
      left
      temporary
      app
    >
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
        <v-list-tile
          @click.stop="left = !drawerLeft"
          v-for="(route) in routes"
          :key="route.key"
        >
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link :to="{path: route.path}">{{ {state: translation, key: route.meta.translationKey} | translate}}</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="blue-grey"
      dark
      fixed
      app
      clipped-left
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{translation.AppName}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <agora-language-picker :translation="translation" />
    </v-toolbar>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop, Watch } from "vue-property-decorator";
  import { mapState } from "vuex";
  import { RouteConfig } from "vue-router";
  import _ from "lodash";
  import { IRootState } from "@common/base/store/interfaces/IRootState";
  import { IRoute } from "@common/router/interfaces/IRoute";
  import { ITranslation } from "@common/i18n/interfaces/ITranslation";
  import AgoraLanguagePicker from "@components/i18n/web.vue";
  import { RouteService } from "@common/router/services/RouteService";

  @Component({
    components: { AgoraLanguagePicker },
    computed: {
      ...mapState({
        routes: (state: IRootState) => {
          return new RouteService().GET_FILTERED_ROUTES(state.Routes);
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

    // goToPage(page: any) {
    //   this.$router.push(page);
    //   this.drawerLeft = !this.drawerLeft;
    // }
    @Watch("drawer")
    OnDrawerChanged(value: Boolean, oldValue: Boolean) {
      this.drawerLeft = value;
    }
    @Watch("drawerLeft")
    OnDrawerStatusChanged(value: Boolean, oldValue: Boolean) {
      this.$emit("drawerStatus", value);
    }
  }
</script>