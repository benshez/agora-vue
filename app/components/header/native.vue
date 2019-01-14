<template>
  <Page class="page c-white">
    <ActionBar
      android.systemIcon="ic_menu_back"
      class="action-bar"
      :title="{state: rootState.Language.translation, key: this.$router.currentRoute.meta.translationKey} | translate"
    >
      <NavigationButton
        v-if="rootState.ApplicationConfig.IS_ANDROID()"
        text="Menu"
        icon="res://ic_menu_white_24dp"
        @tap="$refs.drawer.nativeView.toggleDrawerState()"
      />
      <ActionItem
        v-else
        text="Menu"
        ios.position="left"
        icon="res://ic_menu"
        @tap="$refs.drawer.nativeView.toggleDrawerState()"
      />
      <ActionItem
        v-show="rootState.ApplicationConfig.IS_IOS() && showBack"
        @tap="goBack"
        ios.position="right"
        text="Back"
      />
    </ActionBar>
    <RadSideDrawer
      id="drawer"
      ref="drawer"
      showOverNavigation="true"
    >
      <StackLayout
        class="c-bg-charcoal"
        ~drawerContent
      >
        <ListView
          class="list-group"
          for="route in rootState.Routes"
        >
          <v-template>
            <StackLayout
              @tap="goToPage(route.path)"
              orientation="horizontal"
              class="list-group-item"
            >
              <Label
                class="list-group-item-text"
                :text="{state: rootState.Language.translation, key: route.meta.translationKey} | translate"
              ></Label>
            </StackLayout>
          </v-template>
        </ListView>
      </StackLayout>
      <StackLayout ~mainContent>
        <router-view />
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
  export default class AgoraHeader extends Vue {
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