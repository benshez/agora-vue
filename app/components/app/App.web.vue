<template>
  <v-app id="inspire">
    <agora-header :drawer="drawer" :translation="translation"/>

    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <v-tooltip right>
              <v-btn icon large :href="source" target="_blank" slot="activator">
                <v-icon large>code</v-icon>
              </v-btn>
              <span>Source</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

    <agora-footer :translation="translation"/>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import AppBase from "@components/app/AppBase";
import AgoraHeader from "@components/header/Header.web.vue";
import AgoraFooter from "@components/footer/Footer.web.vue";

@Component({
  components: { AgoraHeader, AgoraFooter },
  mixins: [AppBase]
})
export default class App extends Vue {
  private drawer: Boolean = false;
  @Prop(Object) source: String;
}
</script>
