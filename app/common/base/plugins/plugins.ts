import lodash from 'lodash';

const AGORA_LODASH = {
	install: function(Vue: any) {
		Vue.prototype.$agoraLodash = lodash;
	}
};

export default {
	AGORA_LODASH
};
