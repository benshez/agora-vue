import { RouteConfig } from 'vue-router';
import AgoraMap from '@views/map/web.vue';

export const MapRoute: RouteConfig = {
  path: '/map',
  component: AgoraMap,
  meta: {
    translationKey: 'menu.map.description',
    description: 'Map'
  }
};