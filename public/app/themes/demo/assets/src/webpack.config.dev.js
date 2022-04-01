const prodConfig = require('./webpack.config.js');
const { merge } = require('webpack-merge');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = merge(prodConfig, {
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
  plugins: [new ESLintPlugin(), new StylelintPlugin()],
});
