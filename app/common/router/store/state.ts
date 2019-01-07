import { RouteConfig } from 'vue-router';
import { IRoute } from '@common/router/interfaces/IRoute';
import { WebAppRouter } from '@common/router/web';
import { NativeAppRouter } from '@common/router/native';

const router: Array<RouteConfig> = (__IS_NATIVE__) ? NativeAppRouter : WebAppRouter
export const state: Array<IRoute> = [
  ...router
];
