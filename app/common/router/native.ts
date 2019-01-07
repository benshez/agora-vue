import { RouteConfig } from 'vue-router';
import { HomeRoute } from '@views/home/routes/native';
import { AboutRoute } from '@views/about/routes/native';
import { MissingRoute } from '@views/error/routes/native';

export const NativeAppRouter: Array<RouteConfig> = [
  HomeRoute,
  AboutRoute,
  MissingRoute
];
