import { RouteConfig } from 'vue-router';
import Home from '@components/home/Home.web.vue';

export const HomeRoute: RouteConfig = {
  path: '/',
  component: Home,
  meta: {
    translationKey: 'menu.home.description',
    description: 'Home'
  }
};