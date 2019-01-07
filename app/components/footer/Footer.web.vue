<template>
  <v-footer color="blue-grey" class="white--text" app>
    <span>{{translation.AppName}}</span>
    <v-spacer></v-spacer>
    <span>{{translation.CopyRight()}}</span>
  </v-footer>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { ITranslation } from "@common/i18n/interfaces/ITranslation";

@Component
export default class AgoraFooter extends Vue {
  @Prop(Object) translation: ITranslation;
}
</script>

