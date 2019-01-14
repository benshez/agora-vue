<template>
  <StackLayout class="form">
    <StackLayout class="input-field">
      <TextField class="input input-border c-bg-grey-light"></TextField>
    </StackLayout>

    <StackLayout class="input-field">
      <TextField class="input c-bg-grey-light"></TextField>
    </StackLayout>

    <Button
      text="Log In"
      class="btn btn-primary"
    ></Button>
  </StackLayout>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from "vue-property-decorator";
  import RootState from "@common/base/store/mixins/RootState";

  @Component({
    mixins: [RootState]
  })
  export default class AgoraHome extends Vue {}
</script>