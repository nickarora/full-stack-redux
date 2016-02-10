const webpack = require('webpack');
var webpackConfig = require('./webpack.dev.config.js');

module.exports = function(config) {
  config.set({

    browsers: [ 'PhantomJS' ],
    captureTimeout: 60000,
    browserNoActivityTimeout: 60000, // plenty of time to build
    singleRun: true,
    colors: true,
    frameworks: [ 'mocha', 'sinon', 'chai' ],
    reporters: ["mocha"],

    // Babelify tests
    files: [
      'test/browser/*.test.js'
    ],
    preprocessors: {
      './test/browser/*.test.js': [ 'webpack' ] // Preprocess with webpack
    },

    webpack: {
      module: {
        loaders: webpackConfig.module.loaders
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('test')
        })
      ],
      node: {
        fs: 'empty',
      }
    },

    webpackServer: {
      noInfo: true // no webpack output
    }

  });
};