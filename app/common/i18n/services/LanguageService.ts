import { I18nResolver } from 'i18n-ts';
import _ from 'lodash';
import { ILanguage } from '@common/i18n/interfaces/ILanguage';
import { ITranslation } from '@common/i18n/interfaces/ITranslation';
import { en, af } from '@common/i18n/languages';

export const CURRENT_LANGUAGES = {
	en: en,
	af: af,
	default: en
};

export const LANGUAGES: Array<ILanguage> = [ CURRENT_LANGUAGES.en, CURRENT_LANGUAGES.af ];

export const FILTERED_DEFAULT_LANGUAGE: ILanguage = CURRENT_LANGUAGES.default;

export class LanguageService {
	public GET_LANGUAGES(): Array<ILanguage> {
		return LANGUAGES;
	}

	public RESOLVE_LANGUAGE(languageKey: string): ILanguage {
		return new I18nResolver(CURRENT_LANGUAGES, languageKey).translation;
	}

	public FILTER_TRANSFORM(translation: ITranslation, key: string) {
		return _.get(translation, key);
	}
}
