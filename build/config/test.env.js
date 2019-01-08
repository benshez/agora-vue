'use strict';
const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const TARGET = process.env.NODE_ENV;

module.exports = {
	entry: path.resolve(__dirname, '../../src/agora.ts'),
	output: {
		path: path.resolve(__dirname, '../../public/assets/js/'),
		filename: 'agora.js',
		publicPath: '/public/assets/js/'
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
				use: [ 'vue-style-loader', 'css-loader' ]
			},
			{
				test: /\.scss$/,
				use: [ 'vue-style-loader', 'css-loader', 'sass-loader' ]
			},
			{
				test: /\.sass$/,
				use: [ 'vue-style-loader', 'css-loader', 'sass-loader?indentedSyntax' ]
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						css: [ 'vue-style-loader', 'css-loader' ],
						scss: [ 'vue-style-loader', 'css-loader', 'sass-loader' ],
						sass: [ 'vue-style-loader', 'css-loader', 'sass-loader?indentedSyntax' ]
					}
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
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
				options: {
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},
	resolve: {
		alias: {
			vue$: 'vue/dist/vue.esm.js'
		},
		extensions: [ '*', '.ts', '.js', '.vue', '.json' ]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(TARGET)
			}
		})
	],
	performance: {
		hints: false
	}
};
