import { Module } from 'vuex';
import { IRootState } from '@common/base/store/interfaces/IRootState';
import { IRoute } from '@common/router/interfaces/IRoute';
import { mutations } from '@common/router/store/mutation';
import { actions } from '@common/router/store/actions';
import { state } from '@common/router/store/state';
import { getters } from '@common/router/store/getters';
import { Config } from '@common/config/Config';

export const Routes: Module<Array<IRoute>, IRootState> = {
  namespaced: Config.APP_SETTINGS.STORE_NAMESPACED,
  state,
  getters,
  mutations,
  actions
};
