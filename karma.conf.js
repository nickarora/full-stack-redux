var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({

    browsers: [ 'PhantomJS' ],
    captureTimeout: 60000,
    browserNoActivityTimeout: 60000, // plenty of time to build
    singleRun: true,
    colors: true,
    frameworks: [ 'mocha', 'sinon', 'chai' ],
    reporters: ["spec"],

    // Babelify tests
    preprocessors: {
      './test/*.test.js': [ 'webpack' ]
    },

    webpack: {
      module: {
        loaders: webpackConfig.module.loaders
      },
      node: {
        fs: 'empty'
      }
    },

    files: [
      './test/*.test.js'
    ],

    webpackServer: {
      noInfo: true // no webpack output
    }

  });
};