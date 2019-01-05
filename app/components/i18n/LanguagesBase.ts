import Vue from 'vue';
import { LanguageService } from '@common/i18n/services/LanguageService';
import { UPDATE_LANGUAGE } from '@common/base/store/MutationTypes';

export default Vue.extend({
	data() {
		return {
			languages: {}
		};
	},
	created() {
		this.languages = new LanguageService().LANGUAGES();
	},
	methods: {
		OnLanguageChange(key: String) {
			this.$store.dispatch(`Language/${UPDATE_LANGUAGE}`, key);
		}
	}
});
