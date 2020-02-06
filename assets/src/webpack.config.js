const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    app: [
      path.resolve(__dirname) + '/index.app.js'
    ],
    blocks: [
      path.resolve(__dirname) + '/index.blocks.js'
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
