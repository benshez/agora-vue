import { GetterTree } from 'vuex';
import { IRootState } from '@common/base/store/interfaces/IRootState';
import { IAppConfig } from '@common/config/interfaces/IAppConfig';

export const getters: GetterTree<Array<IAppConfig>, IRootState> = {};
