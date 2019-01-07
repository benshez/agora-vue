import { RouteConfig } from 'vue-router';
import AgoraMissing from '@views/error/web.vue';

export const MissingRoute: RouteConfig = {
  path: '*',
  component: AgoraMissing,
  meta: {
    translationKey: '',
    description: 'Not Found'
  }
};