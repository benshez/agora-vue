import { ActionTree } from 'vuex';
import { IDynanicComponent } from '@common/events/interfaces/IDynanicComponent';
import { IRootState } from '@common/base/store/interfaces/IRootState';
import { DYNAMIC_COMPONENT_TOGGLE } from '@common/base/store/MutationTypes';

export const actions: ActionTree<IDynanicComponent, IRootState> = {
	[DYNAMIC_COMPONENT_TOGGLE]({ commit }, component: IDynanicComponent) {
		commit(DYNAMIC_COMPONENT_TOGGLE, component);
	}
};
