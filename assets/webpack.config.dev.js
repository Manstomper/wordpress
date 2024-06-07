const path = require('path');
const prodConfig = require('./webpack.config.js');
const { merge } = require('webpack-merge');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = merge(prodConfig, {
  plugins: [
    new ESLintPlugin({
      context: path.resolve(__dirname),
      extensions: ['js', 'vue'],
    }),
    new StylelintPlugin({
      context: path.resolve(__dirname),
    }),
  ],
});
