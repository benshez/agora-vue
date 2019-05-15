import { I18nResolver } from "i18n-ts";
import _ from "lodash";
import { ILanguage } from "@common/i18n/interfaces/ILanguage";
import { ITranslation } from "@common/i18n/interfaces/ITranslation";
import { en, af } from "@common/i18n/languages";

export class LanguageService {

	public CURRENT_LANGUAGES() {
		return {
			en: en,
			af: af,
			default: en
		};
	}

	public LANGUAGES(): Array<ILanguage> {
		return [this.CURRENT_LANGUAGES().en, this.CURRENT_LANGUAGES().af];
	}

	public FILTERED_DEFAULT_LANGUAGE(): ILanguage {
		return this.CURRENT_LANGUAGES().default;
	}

	public GET_LANGUAGES(): Array<ILanguage> {
		return this.LANGUAGES();
	}

	public RESOLVE_LANGUAGE(languageKey: string): ILanguage {
		return new I18nResolver(this.CURRENT_LANGUAGES(), languageKey).translation;
	}

	public FILTER_TRANSFORM(translation: ITranslation, key: string) {
		return _.get(translation, key);
	}
}
