import { Vue, Component } from 'vue-property-decorator';
import { mapState } from 'vuex';
import { IRootState } from '@common/base/store/interfaces/IRootState';
import { ITranslation } from '@common/i18n/interfaces/ITranslation';

@Component({
	computed: mapState({
		translation: (state: IRootState) => {
			debugger;
			return state.Language.translation;
		}
	})
})
export default class AppBase extends Vue {
	public translation: ITranslation;
}
