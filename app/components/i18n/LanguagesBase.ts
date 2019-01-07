import { Vue, Component } from 'vue-property-decorator';
import { LanguageService } from '@common/i18n/services/LanguageService';
import { UPDATE_LANGUAGE } from '@common/base/store/MutationTypes';
import { ILanguage } from '@common/i18n/interfaces/ILanguage';

@Component({
	created() {
		this.languages = new LanguageService().LANGUAGES();
	},
	methods: {
		OnLanguageChange(key: String) {
			this.$store.dispatch(`Language/${UPDATE_LANGUAGE}`, key);
		}
	}
})
export default class AgoraLanguageBase extends Vue {
	public languages: Array<ILanguage>;
}
