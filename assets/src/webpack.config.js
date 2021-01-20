const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const TerserPlugin = require('terser-webpack-plugin');

const packageInfo = require('./../../package.json');
const themePublicPath = '/wp-content/themes/' + packageInfo.name + '/assets/dist';

module.exports = {
  entry: {
    app: [
      path.resolve(__dirname) + '/index.app.js'
    ],
    admin: [
      path.resolve(__dirname) + '/index.admin.js'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname) + '/../dist/'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        // Only minify public assets, not admin, to preserve the __ function
        // @TODO check if it's possible to not obfuscate certain function names
        test: /app\.js/
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        enforce: 'pre',
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
              publicPath: themePublicPath + '/img',
              outputPath: 'img'
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: themePublicPath + '/fonts',
              outputPath: 'fonts',
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    // Demonstration, not used and should be deleted if the project is new
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};
