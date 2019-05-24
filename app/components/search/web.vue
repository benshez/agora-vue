<template>
  <div class="map-container">
    <v-autocomplete
      v-model="model"
      :items="items"
      :loading="loading"
      :search-input.sync="search"
      color="white"
      hide-no-data
      hide-selected
      item-text="Description"
      item-value="API"
      label="Public APIs"
      placeholder="Start typing to Search"
      prepend-icon="mdi-database-search"
      return-object
      @change="OnItemSelected"
    />

    <v-divider></v-divider>

    <v-expand-transition>
      <v-list>
        <v-list-tile v-for="(mappedItem, i) in mappedItems.key" :key="i">
          <v-list-tile-content>
            <v-list-tile-title v-text="mappedItem.key"></v-list-tile-title>
            <v-list-tile-sub-title v-text="mappedItem.value"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-expand-transition>
    <div style="position:relative; height: 100%; margin-bottom: 32px;">
      <agora-map :location="location"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Provide } from "vue-property-decorator";
import AgoraSearchBase from "@components/search/base";
import AgoraMap from "@components/map/web.vue";
import RootState from "@common/base/store/mixins/RootState";

@Component({
  mixins: [AgoraSearchBase, RootState],
  components: {
    AgoraMap
  }
})
export default class AgoraSearch extends Vue {}
</script>

<style lang="scss" scoped>
.map-container {
  height: 100%;
}
</style>

