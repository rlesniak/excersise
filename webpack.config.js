/**
* Webpack application configuration.
* @copyright (c) 2017-present rafallesniak24@gmail.com
*/

const webpack = require('webpack');
const path = require('path');

const config = require('./config.js');

const distPath = path.join(__dirname, 'dist');

module.exports = {
  output: {
    path: distPath,
    filename: '[name].js',
  },
  resolve: {
    modules: ['node_modules'],
    alias: {
      Components: path.resolve(__dirname, 'src/components'),
      Containers: path.resolve(__dirname, 'src/containers'),
      Modules: path.resolve(__dirname, 'src/modules'),
      Store: path.resolve(__dirname, 'src/store'),
      Utils: path.resolve(__dirname, 'src/utils'),
    },
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
      }, {
        loader: 'sass-loader',
      }],
    }],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      API_KEY: JSON.stringify(config.apiKey),
    }),
  ],
};
