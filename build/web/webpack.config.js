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
    build: join(appFullPath, 'main.web.ts')
    // vendor: join(appFullPath, 'vendor.js'),
  },
  output: {
    path: dist
  },
  resolve: {
    extensions: getExtensions(platform), // ['.vue', '.js', '.scss', '.css'],
    alias: {
      '~': appFullPath,
      '@assets': resolve(appFullPath, 'assets'),
      '@components': resolve(appFullPath, 'components'),
      // assets: resolve(appFullPath, 'assets'),
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-loader', 'sass-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: [
              'css-hot-loader',
              MiniCssExtractPlugin.loader,
              'css-loader',
              'sass-loader'
            ],
            css: ['css-hot-loader', 'sass-loader'],
            ts: [
              'ts-loader',
              {
                exclude: /node_modules/,
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
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `app.css`
    }),
    new HtmlWebpackPlugin({
      template: resolve(appResourcesFullPath, 'index.html')
    }),
    new VueLoaderPlugin()
  ]
}

console.log(config)

module.exports = config
