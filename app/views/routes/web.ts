import Vue from 'vue';
import VueRouter, { RouterOptions } from 'vue-router';
import { WebAppRouter } from '@common/router/web';

Vue.use(VueRouter);

export const routes = new VueRouter(<RouterOptions>{
  mode: 'history',
  linkActiveClass: 'active',
  base: __dirname,
  routes: WebAppRouter
});
