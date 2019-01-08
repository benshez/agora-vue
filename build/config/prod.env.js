'use strict';
const { resolve, sep, join } = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const TARGET = process.env.NODE_ENV;
const platform = 'web';
const projectRoot = resolve(__dirname, '../..');
const appFullPath = resolve(projectRoot, 'app');
const dist = resolve(projectRoot, `platforms${sep}${platform}`);
const { getExtensions } = require('../utils');
const appResourcesFullPath = resolve(appFullPath, `App_Resources${sep}${platform}`);

module.exports = {
	entry: {
		main: join(appFullPath, 'main.web.ts')
	},
	output: {
		path: dist
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
			'~': appFullPath,
			'@assets': resolve(appFullPath, 'assets'),
			'@common': resolve(appFullPath, 'common'),
			'@components': resolve(appFullPath, 'components'),
			'@views': resolve(appFullPath, 'views'),
			vue$: 'vue/dist/vue.esm.js'
		},
		extensions: getExtensions(platform)
	},
	plugins: [
		new webpack.DefinePlugin({
			'global.TNS_WEBPACK': 'false',
			__ENVIRONMENT__: JSON.stringify(TARGET),
			__IS_NATIVE__: false,
			__IS_IOS__: false,
			__IS_ANDROID__: false
		}),
		new MiniCssExtractPlugin({
			filename: `app.css`
		}),
		new HtmlWebpackPlugin({
			inject: true,
			filename: 'index.html',
			template: resolve(appResourcesFullPath, 'index.html'),
			favicon: resolve(appResourcesFullPath, 'favicon.ico'),
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
