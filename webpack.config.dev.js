/**
 * Webpack application development configuration.
 * @copyright (c) 2017-present rafallesniak24@gmail.com
 */

const merge = require('webpack-merge');

const webpackCommonConfig = require('./webpack.config');

const developmentConfig = {
  devtool: 'source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/index.js',
    ],
  },
  devServer: {
    host: 'localhost',
    port: 3000,
  },
};

module.exports = merge(webpackCommonConfig, developmentConfig);
