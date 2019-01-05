import Vue from 'vue';
import { mapState } from 'vuex';
import { IRootState } from '@common/base/store/interfaces/IRootState';

export default Vue.extend({
	computed: {
		...mapState({
			translation: (state: IRootState) => {
				return state.Language.translation;
			}
		})
	}
});
