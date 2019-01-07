import { RouteConfig } from 'vue-router';
import AgoraMissing from '@views/error/native.vue';

export const MissingRoute: RouteConfig = {
  path: '*',
  component: AgoraMissing,
  meta: {
    translationKey: '',
    description: 'Missing'
  }
};
