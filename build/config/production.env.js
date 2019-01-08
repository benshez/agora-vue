'use strict';
const { resolve, sep, join } = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { platformWeb, Utilities, paths } = require('../base.config');
const platform = platformWeb();
const utils = new Utilities(platform);

const config = {
	entry: {
		main: join(paths.app, `main.${platform}.ts`)
	},
	output: {
		path: `${paths.dist}${sep}${platform}`
	},
	optimization: {
		minimize: true,
		minimizer: [
			new UglifyJSPlugin({
				sourceMap: false,
				uglifyOptions: {
					ecma: 8,
					warnings: false,
					compress: {
						warnings: false,
						conditionals: true,
						unused: true,
						comparisons: true,
						sequences: true,
						dead_code: true,
						evaluate: true,
						join_vars: true,
						if_return: true
					},
					output: {
						comments: false,
						beautify: false
					},
					toplevel: false,
					nameCache: null,
					ie8: false,
					keep_classnames: undefined,
					keep_fnames: false,
					safari10: false
				}
			})
		]
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [ 'vue-style-loader', 'css-loader' ]
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [ 'vue-style-loader', 'css-loader', 'sass-loader' ]
			},
			{
				test: /\.sass$/,
				exclude: /node_modules/,
				use: [ 'vue-style-loader', 'css-loader', 'sass-loader?indentedSyntax' ]
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				exclude: /node_modules/,
				options: {
					loaders: {
						css: [ 'vue-style-loader', 'css-loader' ],
						scss: [ 'vue-style-loader', 'css-loader', 'sass-loader' ],
						sass: [ 'vue-style-loader', 'css-loader', 'sass-loader?indentedSyntax' ]
					}
				}
			},
			{
				test: /\.ts?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					appendTsSuffixTo: [ /\.vue$/ ]
				}
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				exclude: /node_modules/,
				options: {
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},
	resolve: {
		alias: {
			'~': paths.app,
			'@assets': resolve(paths.app, 'assets'),
			'@common': resolve(paths.app, 'common'),
			'@components': resolve(paths.app, 'components'),
			'@views': resolve(paths.app, 'views'),
			vue$: 'vue/dist/vue.esm.js'
		},
		extensions: utils.getExtensions()
	},
	plugins: [
		new webpack.DefinePlugin({
			'global.TNS_WEBPACK': 'false',
			__ENVIRONMENT__: JSON.stringify(utils.getMode()),
			__IS_NATIVE__: utils.getPlatformIsNative(),
			__IS_IOS__: utils.getPatformIsIos,
			__IS_ANDROID__: utils.getPlatformIsAndroid()
		}),
		new MiniCssExtractPlugin({
			filename: `app.css`
		}),
		new HtmlWebpackPlugin({
			inject: true,
			filename: 'index.html',
			template: `${paths.resources}${sep}${platform}${sep}index.html`,
			favicon: `${paths.resources}${sep}${platform}${sep}favicon.ico`,
			title: 'Agora moble application',
			files: {
				css: [
					'app.css',
					'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons'
				]
			},
			meta: {
				viewport: 'width=device-width, initial-scale=1'
			}
		}),
		new VueLoaderPlugin()
	],
	performance: {
		hints: false
	}
};

utils.report('info', `config for ${platform} is ${JSON.stringify(config)}`);

module.exports = config;
