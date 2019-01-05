import { ILanguage } from '@common/i18n/interfaces/ILanguage';
import { LanguageService } from '@common/i18n/services/LanguageService';

export const state: ILanguage = {
	...new LanguageService().FILTERED_DEFAULT_LANGUAGE()
};
