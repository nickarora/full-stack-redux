const MochaTestRunner = require('./plugins/MochaTestRunner');

const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const expressConfig = require('./config/default.json').express;

module.exports = {
  target: 'web',

  entry: [
    `webpack-dev-server/client?http://${expressConfig.host}:${expressConfig.devServerPort}`,
    'webpack/hot/only-dev-server',
    './src/client.js'
  ],

  output: {
    path: `${__dirname}/`,
    filename: 'bundle.js',
    publicPath: `http://${expressConfig.host}:${expressConfig.devServerPort}/`
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel', 'eslint'],
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.NoErrorsPlugin(),
    new MochaTestRunner()
  ],

  eslint: {
    configFile: './.eslintrc'
  },

  postcss: [autoprefixer],

  resolve: {
    extensions: ['', '.jsx', '.js', '.webpack.js', '.scss']
  },

  devtool: 'source-map'
};
