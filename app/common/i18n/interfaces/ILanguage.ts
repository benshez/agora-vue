import { ITranslation } from '@common/i18n/interfaces/ITranslation';
export interface ILanguage {
	key: string;
	description: string;
	translation: ITranslation;
}
