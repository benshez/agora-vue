const { relative, resolve, sep, join } = require('path')

const webpack = require('webpack')
const { getExtensions } = require('../utils')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

const projectRoot = resolve(__dirname, '../..')
const platform = 'web'

const appFullPath = resolve(projectRoot, 'app')
const appResourcesFullPath = resolve(
	appFullPath,
	`App_Resources${sep}${platform}`
)
const dist = resolve(projectRoot, `platforms${sep}${platform}`)
const config = {
	/**
	 * You can use these too for bigger projects. For now it is 0 conf mode for me!
	 */
	entry: {
		build: join(appFullPath, 'main.web.ts'),
		//vendor: join(appFullPath, 'vendor.js'),
	},
	output: {
		//path: dist,
		devtoolModuleFilenameTemplate: info => {
			var $filename = 'sources://' + info.resourcePath;
			if (info.resourcePath.match(/\.vue$/) && !info.query.match(/type=script/)) {
				$filename = 'webpack-generated:///' + info.resourcePath + '?' + info.hash;
			}
			return $filename;
		},
		devtoolFallbackModuleFilenameTemplate: 'webpack:///[resource-path]?[hash]',
	},
	resolve: {
		extensions: getExtensions(platform), //['.vue', '.js', '.scss', '.css'],
		alias: {
			'~': appFullPath,
			'@assets': resolve(appFullPath, 'assets'),
			'@common': resolve(appFullPath, 'common'),
			'@components': resolve(appFullPath, 'components'),
			vue$: 'vue/dist/vue.esm.js'
		},
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['css-loader', 'sass-loader']
			},
			{
				test: /\.scss$/,
				use: ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},
			// {
			// 	test: /\.js$/,
			// 	exclude: /node_modules/,
			// 	use: {
			// 		loader: "babel-loader",
			// 		options: {
			// 			presets: ["babel-preset-env"]
			// 		}
			// 	}
			// 	//loaders: ['es3ify', 'babel'],
			// 	//loader: 'babel-loader',
			// },
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						css: ['css-loader', 'sass-loader'],
						scss: ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
						ts: [
							{
								loader: 'ts-loader',
								options: {
									appendTsSuffixTo: [/\.vue$/]
								}
							}
						]
					}
				}
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]',
				},
			},
			{
				test: /\.ts?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					appendTsSuffixTo: [/\.vue$/]
				}
			}
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: `app.css`,
		}),
		new HtmlWebpackPlugin({
			template: resolve(appResourcesFullPath, 'index.html'),
		}),
		new VueLoaderPlugin(),
	],
}

console.log(config)

module.exports = config