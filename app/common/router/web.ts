import { RouteConfig } from 'vue-router';
import { HomeRoute } from '@views/home/routes/web';
import { AboutRoute } from '@views/about/routes/web';
import { MapRoute } from '@views/map/routes/web';
import { MissingRoute } from '@views/error/routes/web';

export const WebAppRouter: Array<RouteConfig> = [HomeRoute, AboutRoute, MapRoute, MissingRoute];
