import { ActionTree } from 'vuex';
import { IRoute } from '@common/router/interfaces/IRoute';
import { RouteService } from '@common/router/services/RouteService';
import { IRootState } from '@common/base/store/interfaces/IRootState';
import { GET_ROUTES } from '@common/base/store/MutationTypes';

export const actions: ActionTree<Array<IRoute>, IRootState> = {
  [GET_ROUTES]({ commit }, routes: string) {
    commit(GET_ROUTES, new RouteService().GET_ROUTES(routes));
  }
};
