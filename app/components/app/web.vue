<template>
  <v-app id="inspire">
    <agora-header :drawer="drawer" :translation="rootState.Language.current.translation"/>

    <v-content>
      <v-container fluid fill-height>
        <router-view/>
      </v-container>
    </v-content>

    <agora-footer :translation="rootState.Language.current.translation"/>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import AgoraHeader from "@components/header/web.vue";
import AgoraFooter from "@components/footer/web.vue";
import RootState from "@common/base/store/mixins/RootState";

@Component({
  mixins: [RootState],
  components: {
    AgoraHeader,
    AgoraFooter
  }
})
export default class App extends Vue {
  private drawer: Boolean = false;
}
</script>
