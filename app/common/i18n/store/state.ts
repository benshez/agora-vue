import { ILanguage } from '@common/i18n/interfaces/ILanguage';
import { FILTERED_DEFAULT_LANGUAGE } from '@common/i18n/services/LanguageService';

export const state: ILanguage = {
	...FILTERED_DEFAULT_LANGUAGE
};
