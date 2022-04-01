const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'index.app.js'),
    admin: path.resolve(__dirname, 'index.admin.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '..', 'dist'),
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /app\.js/,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        enforce: 'pre',
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|ttf)$/,
        type: 'asset',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};
