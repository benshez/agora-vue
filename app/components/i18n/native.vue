<template></template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import LanguagesBase from "@components/i18n/base";
import { ITranslation } from "@common/i18n/interfaces/ITranslation";

@Component({
  mixins: [LanguagesBase]
})
export default class AgoraLanguagePicker extends Vue {
  @Prop(Object) translation: ITranslation;
}
</script>