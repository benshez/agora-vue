<template>
  <div>
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
  </div>
</template>

<script lang="ts">
import AppBase from "@components/app/AppBase";
import AgoraHeader from "@components/header/Header.web.vue";
import AgoraFooter from "@components/footer/Footer.web.vue";

export default {
  name: "App",
  mixins: [AppBase],
  components: { AgoraHeader, AgoraFooter },
  data: () => ({
    drawer: false
  }),

  props: {
    source: String
  }
};
</script>
