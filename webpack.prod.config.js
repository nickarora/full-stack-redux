const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  target: 'web',

  entry: [
    './src/client'
  ],

  output: {
    path: path.join(__dirname, './dist'),
    filename: './bundle.js',
    publicPath: '/dist/'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.scss?$/,
      loaders: ['style', 'css', 'postcss', 'sass'],
      include: __dirname
    }, {
      test: /\.json$/,
      loader: 'json'
    }]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        PORT: JSON.stringify(process.env.PORT)
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],

  postcss: [autoprefixer],

  resolve: {
    extensions: ['', '.jsx', '.js', '.webpack.js', '.scss']
  }
};
