import { I18n } from 'i18n-ts';
export interface ITranslation {
	AppName: string;
	AppNameUpperCase: string;
	menu: {
		user: {
			description: string;
			login: {
				description: string;
			};
		};
		home: {
			description: string;
		};
		about: {
			description: string;
		};
		claims: {
			description: string;
			create: {
				description: string;
			};
		};
		finance: {
			description: string;
			resubmissions: {
				description: string;
			};
			payments: {
				description: string;
			};
		};
	};
	User: {
		Login: {
			Title: string;
			Description: string;
			LoginButtonText: string;
		};
		Registration: {
			Title: string;
			Description: string;
			UserNameText: string;
			UserSurnameText: string;
			UserEmailText: string;
			UserRoleText: string;
			UserABNText: string;
			UserPasswordText: string;
			UserPasswordConfirmText: string;
			RegisterButtonText: string;
			ForgotPasswordButtonText: string;
		};
	};
	Finance: {
		Payments: {
			Title: string;
			Description: string;
		};
		Resubmissions: {
			Title: string;
			Description: string;
		};
	};
	About: {
		Title: string;
		Description: string;
	};
	Claims: {
		Create: {
			Title: string;
			Description: string;
		};
	};
	Home: {
		Title: string;
		Description: string;
	};
	Greeting: (name: string) => string;
	AppStarted: (app: string) => string;
}
