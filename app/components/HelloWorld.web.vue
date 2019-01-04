<template>
  <div class="page">
    <h1>{{count}}</h1>
    <label class="body">This is a hello world component, tap the button if you dare!!!</label>
    {{translation.About.Description}}
    <agora-language-picker/>
    <button class="btn btn-primary" @click="surprise = !surprise">{{title}}</button>
    <img v-if="surprise" src="@assets/images/NativeScript-Vue.png" style="display:block;">
    <!--  -->
    <span class="hello-world">Hello World</span>
  </div>
</template>

<script lang="ts">
import HelloWorldBase from "@components/HelloWorldBase";
import i18n from "@common/i18n/components/i18n.web.vue";

export default {
  name: "HelloWorld",
  components: {
    i18n
  },
  mixins: [HelloWorldBase]
};
</script>

<style lang="scss" scoped>
.hello-world {
  margin: 20;
  font-size: 10px;
}
</style>
