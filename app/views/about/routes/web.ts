import { RouteConfig } from 'vue-router';
import AgoraAbout from '@views/about/web.vue';

export const AboutRoute: RouteConfig = {
  path: '/about',
  component: AgoraAbout,
  meta: {
    translationKey: 'menu.about.description',
    description: 'About'
  }
};