const path = require('path');
var fs = require('fs');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });


module.exports = {
  entry: [
    './server.js'
  ],

  target: 'node',

  context: __dirname,

  node: {
    __filename: true,
    __dirname: true
  },

  devtool: 'source-map',

  output: {
      path: path.join(__dirname, './dist'),
      filename: './server.bundle.js',
  },

  module: {
      loaders: [{
          test: /\.js$/,
          loaders: ['babel'],
          exclude: /node_modules/,
          include: __dirname
      }, {
          test: /\.scss?$/,
          loaders: ['css', 'postcss', 'sass'],
          include: __dirname
      }, {
          test: /\.json$/,
          loader: 'json'
      }, {
          test: /\.node$/,
          loader: 'node-loader'
      }]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress:{
        warnings: false
      }
    })
  ],

  postcss: [autoprefixer],

  resolve: {
      extensions: ['', '.jsx', '.js', '.webpack.js', '.scss', '.node' ]
  },
  externals: nodeModules
}