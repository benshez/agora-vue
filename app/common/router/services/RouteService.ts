import { RouteConfig } from 'vue-router';
import _ from 'lodash';
import { IRoute } from '@common/router/interfaces/IRoute';

export class RouteService {
  public GET_ROUTES(routes: string): Array<IRoute> {
    return this.GET_FILTERED_ROUTES(routes);
  }

  public GET_FILTERED_ROUTES(routes: any): Array<IRoute> {
    return _.filter(routes, function (route: RouteConfig) {
      return route.meta.translationKey !== '';
    });
  }
}
