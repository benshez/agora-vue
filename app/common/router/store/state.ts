import { RouteConfig } from 'vue-router';
import { IRoute } from '@common/router/interfaces/IRoute';
import { WebAppRouter } from '@common/router/web';
import { NativeAppRouter } from '@common/router/native';
import { Config } from '@common/config/Config';

const router: Array<RouteConfig> = Config.IS_NATIVE() ? NativeAppRouter : WebAppRouter;
export const state: Array<IRoute> = [ ...router ];
