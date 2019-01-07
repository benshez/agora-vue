import Vue from 'vue';
import VueRouter, { RouterOptions } from 'vue-router';
import { NativeAppRouter } from '@common/router/native';

Vue.use(VueRouter);

export const routes = new VueRouter(<RouterOptions>{
  pageRouting: true,
  routes: NativeAppRouter
});
