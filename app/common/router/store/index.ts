import { VuexModule, Module, Mutation, Action, getModule } from "vuex-module-decorators";
import { Store } from "vuex";
import { RouteConfig } from "vue-router";
import { IRoute } from "@common/router/interfaces/IRoute";
import { GET_ROUTES } from "@common/base/store/MutationTypes";
import { RouteService } from "@common/router/services/RouteService";
import { WebAppRouter } from "@common/router/web";
import { NativeAppRouter } from "@common/router/native";
import { Config } from "@common/config/Config";

const router: Array<RouteConfig> = Config.IS_NATIVE() ? NativeAppRouter : WebAppRouter;

@Module({ name: "Routes", namespaced: Config.APP_SETTINGS.STORE_NAMESPACED, })
export default class Routes extends VuexModule {
  current: Array<IRoute> = [...router];

  @Mutation [GET_ROUTES](route: IRoute) {
    this.current = [route];
  }

  @Action({ commit: GET_ROUTES }) loadRoutes(routes: string) {
    return new RouteService().GET_ROUTES(routes);
  }

  @Action({}) loadFilteredRoutes() {
    return new RouteService().GET_FILTERED_ROUTES(this.current);
  }
}

export const getStore = (store?: Store<IRoute>): Routes => getModule(Routes, store);
