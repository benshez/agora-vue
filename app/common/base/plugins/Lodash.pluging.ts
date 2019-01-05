import lodash from 'lodash';

export const LodashPluging = {
  install: function (Vue: any) {
    Vue.prototype.$agoraLodash = lodash;
  }
};
