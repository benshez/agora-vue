<template>
  <div>
    <select>
      <option>Please select...</option>
    </select>
  </div>
</template>

<script lang="ts">
import LanguagesBase from "@components/i18n/LanguagesBase";

export default {
  name: "AgoraLanguagePicker",
  mixins: [LanguagesBase]
};
</script>