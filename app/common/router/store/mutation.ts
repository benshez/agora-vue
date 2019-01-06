import { MutationTree } from 'vuex';
import { GET_ROUTES } from '@common/base/store/MutationTypes';
import { IRoute } from '@common/router/interfaces/IRoute';

export const mutations: MutationTree<Array<IRoute>> = {
  [GET_ROUTES](state: Array<IRoute>, lang: IRoute) {
    Object.assign(state, lang);
    return lang;
  }
};
