<template>
  <v-app id="inspire">
    <agora-header
      :drawer="drawer"
      :translation="translation"
    />

    <v-content>
      <v-container
        fluid
        fill-height
      >
        <v-layout
          justify-center
          align-center
        >
          <v-flex shrink>
            <router-view />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

    <agora-footer :translation="translation" />
  </v-app>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from "vue-property-decorator";
  import AppBase from "@components/app/base";
  import AgoraHeader from "@components/header/web.vue";
  import AgoraFooter from "@components/footer/web.vue";

  @Component({
    components: { AgoraHeader, AgoraFooter },
    mixins: [AppBase]
  })
  export default class App extends Vue {
    private drawer: Boolean = false;
  }
</script>
