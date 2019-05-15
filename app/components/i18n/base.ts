import { Vue, Component } from "vue-property-decorator";
import { LanguageService } from "@common/i18n/services/LanguageService";
import { ILanguage } from "@common/i18n/interfaces/ILanguage";
import { getStore as getLanguageStore } from "@common/i18n/store";

@Component({
	created() {
		this.languages = new LanguageService().LANGUAGES();
	},
	methods: {
		OnLanguageChange(key: String) {
			getLanguageStore(this.$store).loadLanguage(key.toString())
		}
	}
})
export default class AgoraLanguageBase extends Vue {
	public languages: Array<ILanguage>;
}
