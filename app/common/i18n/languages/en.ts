import { ILanguage } from '@common/i18n/interfaces/ILanguage';

export const en: ILanguage = {
	key: 'en',
	description: 'English',
	translation: {
		AppName: 'Agora',
		AppNameUpperCase: 'AGORA',
		TranslationSelectText: 'Translate',
		menu: {
			user: {
				description: 'User',
				login: {
					description: 'Login'
				}
			},
			home: {
				description: 'Home'
			},
			about: {
				description: 'About'
			},
			claims: {
				description: 'Claims',
				create: {
					description: 'Submit a new claim'
				}
			},
			finance: {
				description: 'Finance',
				resubmissions: {
					description: 'Resubmission'
				},
				payments: {
					description: 'Make a payment'
				}
			}
		},
		User: {
			Login: {
				Title: 'Gebruiker Login',
				Description: 'Gebruik Dit So.',
				LoginButtonText: 'Login'
			},
			Registration: {
				Title: 'Gebruiker Registratie',
				Description: 'Gebruik Dit So.',
				UserNameText: 'User name',
				UserSurnameText: 'User Surname',
				UserEmailText: 'User Email',
				UserRoleText: 'Type of User',
				UserABNText: 'ABN (optional)',
				UserPasswordText: 'Password',
				UserPasswordConfirmText: 'Confirm Password',
				RegisterButtonText: 'Registeer',
				ForgotPasswordButtonText: 'Passwoord Vergeet'
			}
		},
		Finance: {
			Payments: {
				Title: 'Verander Betaalings',
				Description: 'Verander Asseblief Betaalings.'
			},
			Resubmissions: {
				Title: 'Verander Betaalings',
				Description: 'Verander Asseblief Betaalings.'
			}
		},
		About: {
			Title: 'Title',
			Description: 'About'
		},
		Claims: {
			Create: {
				Title: 'Title',
				Description: 'Description'
			}
		},
		Home: {
			Title: 'Title',
			Description: 'Description'
		},
		Greeting: (name: string) => `Hi ${name}`,
		AppStarted: (app: string) => `${app} started.`,
		CopyRight: () => `© ${new Date().getFullYear()}`
	}
};
