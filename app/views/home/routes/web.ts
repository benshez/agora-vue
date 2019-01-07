import { RouteConfig } from 'vue-router';
import AgoraHome from '@views/home/web.vue';

export const HomeRoute: RouteConfig = {
  path: '/',
  component: AgoraHome,
  meta: {
    translationKey: 'menu.home.description',
    description: 'Home'
  }
};