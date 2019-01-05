<template>
  <div class="page">
    <h1>{{count}}</h1>
    <label class="body">This is a hello world component, tap the button if you dare!!!</label>
    
    {{translation.About.Description}}
    <button
      class="btn btn-primary"
      @click="surprise = !surprise"
    >{{title}}</button>
    <img v-if="surprise" src="@assets/images/NativeScript-Vue.png" style="display:block;">
    <!--  -->
    <span class="hello-world">Hello World</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorldBase from "@components/HelloWorldBase";
import AgoraLanguagePickerWeb from "@common/i18n/component/Languages.web.vue";
let homeComponent = { template: "<div class='home'>Name here</div>" };
export default {
  name: "HelloWorld",
  components: { homeComponent, AgoraLanguagePickerWeb },
  mixins: [HelloWorldBase]
};
</script>

<style lang="scss" scoped>
.hello-world {
  margin: 20;
  font-size: 10px;
}
</style>
