import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators';
import { Store } from 'vuex';
import { IDynanicComponent } from '@common/events/interfaces/IDynanicComponent';
import { DYNAMIC_COMPONENT_TOGGLE } from '@common/base/store/MutationTypes';
import { Config } from '@common/config/Config';

@Module({ name: 'DynamicComponent', namespaced: Config.APP_SETTINGS.STORE_NAMESPACED, })
export default class DynamicComponent extends VuexModule {
  current: IDynanicComponent = {
    name: '',
    key: ''
  };

  @Mutation [DYNAMIC_COMPONENT_TOGGLE](component: IDynanicComponent) {
    this.current = component;
  }

  @Action({ commit: DYNAMIC_COMPONENT_TOGGLE }) loadComponent(component: IDynanicComponent) {

  }
}

export const getStore = (store?: Store<IDynanicComponent>): DynamicComponent => getModule(DynamicComponent, store);
