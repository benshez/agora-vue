<template>
  <Page class="page">
    <ActionBar
      android.systemIcon="ic_menu_back"
      class="action-bar"
      :title="rootState.Language.translation.AppName"
    >
      <NavigationButton
        v-if="rootState.ApplicationConfig.IS_ANDROID()"
        text="Menu"
        icon="res://ic_menu_white_24dp"
        @tap="$refs.drawer.nativeView.toggleDrawerState()"
      ></NavigationButton>
      <ActionItem
        v-else
        text="Menu"
        ios.position="left"
        icon="res://ic_menu"
        @tap="$refs.drawer.nativeView.toggleDrawerState()"
      ></ActionItem>
      <ActionItem
        v-show="rootState.ApplicationConfig.IS_IOS() && showBack"
        @tap="goBack"
        ios.position="right"
        text="Back"
      ></ActionItem>
    </ActionBar>
    <RadSideDrawer id="drawer" ref="drawer" showOverNavigation="true">
      <StackLayout class="drawer-content" ~drawerContent>
        <ListView class="list-group" for="route in rootState.Routes">
          <v-template>
            <StackLayout
              @tap="goToPage(route.path)"
              orientation="horizontal"
              class="sidedrawer-list-group"
            >
              <Label
                class="list-group-item-text m-10"
                :text="{state: rootState.Language.translation, key: route.meta.translationKey} | translate"
              ></Label>
            </StackLayout>
          </v-template>
        </ListView>
      </StackLayout>
      <StackLayout class="main-container" ~mainContent>
        <router-view/>
      </StackLayout>
    </RadSideDrawer>
  </Page>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import RootState from "@common/base/store/mixins/RootState";

@Component({
  mixins: [RootState]
})
export default class App extends Vue {
  goBack() {
    this.$router.back();
  }
  goToPage(page: any) {
    this.$router.push(page);
    this.closeDrawer();
  }
  closeDrawer() {
    const drawer: any = this.$refs.drawer;
    drawer.nativeView.closeDrawer();
  }
}
</script>
<style lang="scss">
ActionBar {
  background-color: #816894;
}

.drawer-content {
  background-color: white;
  ListView {
    margin-left: -15;
  }
}
.sidedrawer-list-group {
  padding: 10;
  padding-left: 30;
  font-size: 16pt;
  color: #555555;
  .mdi {
    padding-right: 20;
  }
}
</style>

