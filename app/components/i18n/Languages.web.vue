<template>
  <div>
    <v-menu offset-y>
      <v-btn
        slot="activator"
        color="primary"
        dark
      >{{translation.TranslationSelectText}}</v-btn>
      <v-list>
        <v-list-tile
          v-for="(language) in languages"
          :key="language.key"
          @click="OnLanguageChange(language.key)"
        >
          <v-list-tile-title>{{ language.description }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts">
  import LanguagesBase from "@components/i18n/LanguagesBase";

  export default {
    name: "AgoraLanguagePicker",
    mixins: [LanguagesBase],
    props: {
      translation: {}
    }
  };
</script>