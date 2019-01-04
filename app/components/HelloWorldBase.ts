import Vue from 'vue';
import { mapState } from 'vuex';
import { IRootState } from '@common/base/store/interfaces/IRootState';

export default Vue.extend({
	data() {
		return {
			surprise: false,
			title: 'Tap you!',
			count: 300
		};
	},
	created() {
		setInterval(() => {
			this.count -= 1;
		}, 1000);
	},

	computed: {
		...mapState({
			translation: (state: IRootState) => {
				return state.Language.translation;
			}
		})
	}
});
