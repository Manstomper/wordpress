const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
        // Only minify public assets, not admin, to preserve __ function
        // @TODO check if it's possible to not obfuscate certain function names
        test: /app\.js/
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        enforce: 'pre',
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('precss'),
                  require('autoprefixer')
                ];
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
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
        test: /\.svg$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
              publicPath: themePublicPath + '/img',
              outputPath: 'img'
            }
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { removeTitle: true },
                { convertColors: { shorthex: false } },
                { convertPathData: false }
              ]
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
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};
