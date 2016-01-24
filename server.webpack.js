var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var appPort = 3000;
var devServerPort = 8080;

new WebpackDevServer(webpack(config), {
  contentBase: 'dist/',
  headers: { 'Access-Control-Allow-Origin': '*' },
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  noInfo: true,
  hot: true,
  proxy: {
    '*': 'http://localhost:' + appPort
  }
}).listen(devServerPort, 'localhost', function(err) {
  if (err) console.log(err);
  console.log('Listening at localhost:' + devServerPort);
});