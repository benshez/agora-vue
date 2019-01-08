'use strict';
const path = require('path');
const webpack = require('webpack');
const TARGET = process.env.NODE_ENV;

module.exports = {
	entry: path.resolve(__dirname, '../../src/agora.ts'),
	output: {
		path: path.resolve(__dirname, '../../public/assets/js/'),
		filename: 'agora.js',
		publicPath: '/assets/js/'
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
			vue$: 'vue/dist/vue.esm.js',
			'~common': path.resolve(__dirname, '../../src/common'),
			'~components': path.resolve(__dirname, '../../src/components'),
			'~store': path.resolve(__dirname, '../../src/store'),
			'~router': path.resolve(__dirname, '../../src/router')
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
	},
	devServer: {
		historyApiFallback: true,
		noInfo: false,
		overlay: true,
		contentBase: './public',
		inline: true
	},
	devtool: '#eval-source-map'
};
