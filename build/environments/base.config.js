'use strict';

const { resolve, sep, join } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const winston = require('winston-color');
const argv = require('yargs').argv;

const platformIos = () => {
	return 'ios';
};

const platfromAndroid = () => {
	return 'android';
};

const platformsNative = () => {
	return [ platformIos(), platfromAndroid() ];
};

const platformNative = (env) => {
	return env && ((env.android && platfromAndroid()) || (env.ios && platformIos()));
};

const platformWeb = () => {
	return 'web';
};

const extentions = [ 'vue', 'js', 'ts', 'css', 'scss' ];

const loaders = {
	web: {
		css: [ MiniCssExtractPlugin.loader, 'css-loader' ],
		scss: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ],
		sass: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader?indentedSyntax' ],
		ts: 'ts-loader',
		js: 'babel-loader',
		vue: 'vue-loader',
		files: 'file-loader'
	},
	native: {
		css: [ 'css-loader', 'sass-loader' ],
		scss: [ 'css-loader', 'sass-loader' ],
		sass: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader?indentedSyntax' ],
		ts: 'ts-loader',
		js: 'babel-loader',
		vue: 'vue-loader',
		files: 'file-loader'
	}
};

class Utilities {
	constructor(platform) {
		this.platform = platform;
		this.report('info', platform);
	}

	getAppName() {
		return 'Agora';
	}

	getMode() {
		return argv.environment;
	}

	getPlatformIsNative() {
		return [ platformIos(), platfromAndroid() ].includes(this.platform);
	}

	getPlatformIsAndroid() {
		return this.platform === platfromAndroid();
	}

	getPatformIsIos() {
		return this.platform === platformIos();
	}

	getExtensions() {
		return extentions.reduce((exts, ext) => {
			exts.push(`.${this.platform}.${ext}`);
			if (this.getPlatformIsNative()) exts.push(`.native.${ext}`);
			exts.push(`.${ext}`);
			return exts;
		}, []);
	}

	getLoaders() {
		if (this.getPlatformIsNative()) return loaders['native'];
		return loaders[this.platform];
	}

	getAliases() {
		return {
			// '~': this.resolvePaths(this.getRootDir(), 'app'),
			// '@assets': this.resolvePaths(this.getRootDir(), `app${sep}assets`),
			// '@common': this.resolvePaths(this.getRootDir(), `app${sep}common`),
			// '@components': this.resolvePaths(this.getRootDir(), `app${sep}components`),
			// '@views': this.resolvePaths(this.getRootDir(), `app${sep}views`),
			'~': this.getAppDirectory(),
			'@assets': this.resolvePaths(this.getAppDirectory(), `assets`),
			'@common': this.resolvePaths(this.getAppDirectory(), `common`),
			'@components': this.resolvePaths(this.getAppDirectory(), `components`),
			'@views': this.resolvePaths(this.getAppDirectory(), `views`),
			vue: this.getPlatformIsNative() ? 'nativescript-vue' : 'vue/dist/vue.esm.js'
		};
	}

	getRootDir() {
		//return this.getPlatformIsNative() ? __dirname : resolve(__dirname, '../..');
		return resolve(__dirname, '../..');
	}

	getAppDirectory() {
		return this.resolvePaths(this.getRootDir(), 'app');
	}

	getPaths() {
		return {
			app: {
				import: `../app`,
				resolves: `app`
			},
			build: {
				import: `../build`,
				resolves: `build`
			},
			node_modules: {
				import: `../node_modules`,
				resolves: `node_modules`
			},
			platforms: {
				import: `../platforms`,
				resolves: `platforms`
			},
			types: {
				import: `../types`,
				resolves: `types`
			},
			resources: {
				import: `../app/App_Resources`,
				resolves: `app${sep}App_Resources`
			},
			assets: {
				import: `../app/assets`,
				resolves: `app${sep}assets`
			},
			environments: {
				import: `./environments`,
				resolves: `build${sep}environments`
			}
		};
	}

	getResource(folder, resource) {
		return `${this.resolvePaths(this.getRootDir(), folder)}${sep}${resource}`;
	}

	resolvePaths(parent, folder) {
		return resolve(parent, folder);
	}

	getPlatformResources(resource) {
		return this.resolvePaths(
			this.getRootDir(),
			`${this.getPaths().resources.resolves}${sep}${this.getResourcePlatformDirectory()}${sep}${resource}`
		);
	}

	getPlatformDistributionPath() {
		return this.resolvePaths(
			this.getRootDir(),
			`${this.getPaths().platforms.resolves}${sep}${this.getResourcePlatformDirectory()}`
		);
	}

	getResourcePlatformFullDirectory() {
		return `${this.getPaths().resources.resolves}${sep}${this.getResourcePlatformDirectory()}`;
	}

	getResourcePlatformDirectory() {
		let directory = '';

		switch (this.platform) {
			case platformWeb():
				directory = 'Web';
				break;
			case platfromAndroid():
				directory = 'Android';
				break;
			case platformIos():
				directory = 'iOS';
				break;
		}

		return directory;
	}

	report(reportType = 'info', message = '') {
		let msg = '';

		switch (reportType) {
			case 'info':
				msg = winston.info(message);
				break;
			case 'error':
				msg = winston.error(message);
				break;
		}

		return msg;
	}

	globalVariables() {
		return {
			'global.TNS_WEBPACK': this.getPlatformIsNative() ? 'true' : 'false',
			__ENVIRONMENT__: JSON.stringify(this.getMode()),
			__IS_NATIVE__: this.getPlatformIsNative(),
			__IS_IOS__: this.getPatformIsIos(),
			__IS_ANDROID__: this.getPlatformthis.$store.state.ApplicationConfig.IS_ANDROID()()
		};
	}

	getBuildFile() {
		return `${this.getPaths().environments.import}/${this.getMode()}`;
	}
}

module.exports = {
	platformWeb,
	platformNative,
	platformsNative,
	Utilities: Utilities
};
