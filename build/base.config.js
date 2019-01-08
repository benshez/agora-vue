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
const loaders = [ 'nativescript-dev-webpack/style-hot-loader', 'css-hot-loader' ];
const cssLoaderOption = { loader: 'css-loader', options: { minimize: false, url: false } };
const root = resolve(__dirname, '../.');
const paths = {
	app: resolve(root, `app`),
	assets: resolve(root, `assets`),
	baseUrl: `./`,
	dist: resolve(root, `platforms`),
	templates: resolve(root, `templates`),
	nodeModules: resolve(root, `node_modules`),
	resources: resolve(root, `app${sep}App_Resources`),
	config: `./config`
};

class Utilities {
	constructor(platform) {
		this.platform = platform;
	}

	getAppName() {
		return 'Agora';
	}

	getMode() {
		return argv.mode;
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

	getPlatformSpecificCssLoader() {
		return this.getPlatformIsNative() ? loaders.join(', ') : loaders[1];
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
		return {
			scss: [ this.getPlatformSpecificCssLoader(), MiniCssExtractPlugin.loader, cssLoaderOption, 'sass-loader' ],
			css: [ this.getPlatformSpecificCssLoader(), MiniCssExtractPlugin.loader, cssLoaderOption ],
			ts: [
				{
					loader: 'ts-loader',
					options: {
						appendTsSuffixTo: [ /\.vue$/ ]
					}
				}
			]
		};
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
			__MODE__: JSON.stringify(this.getMode()),
			__APP_NAME__: JSON.stringify(this.getAppName()),
			__DEBUG_MODE__: this.getMode() !== 'production'
		};
	}

	requireBuildFile() {
		return {
			development: `${paths.config}/${this.getMode()}.env`,
			production: `${paths.config}/${this.getMode()}.env`,
			test: `${paths.config}/${this.getMode()}.env`
		};
	}

	getBuildFile() {
		this.report('info', 'made it...');
		return this.requireBuildFile()[this.getMode()];
	}
}

module.exports = {
	platformWeb,
	platformNative,
	platformsNative,
	paths,
	Utilities: Utilities
};
