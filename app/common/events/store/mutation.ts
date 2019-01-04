import { MutationTree } from 'vuex';
import { DYNAMIC_COMPONENT_TOGGLE } from '@common/base/store/MutationTypes';
import { IDynanicComponent } from '@common/events/interfaces/IDynanicComponent';

export const mutations: MutationTree<IDynanicComponent> = {
	[DYNAMIC_COMPONENT_TOGGLE](state: IDynanicComponent, component: IDynanicComponent) {
		Object.assign(state, component);
	}
};
