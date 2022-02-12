const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const themePublicPath = '/app/themes/demo/assets/dist';

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'index.app.js'),
    admin: path.resolve(__dirname, 'index.admin.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '..', 'dist'),
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
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|ttf)$/,
        type: 'asset',
      },
    ],
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  watchOptions: {
    poll: 1000,
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
  ],
};
