/**
 * Webpack production configuration.
 * @copyright (c) 2017-present rafallesniak24@gmail.com
 */

const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

const sourcePath = path.join(__dirname, 'src');

const webpackCommonConfig = require('./webpack.config');

const productionConfig = {
  devtool: 'source-map',
  entry: {
    app: path.join(sourcePath, 'index.js'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
};

module.exports = merge(webpackCommonConfig, productionConfig);
