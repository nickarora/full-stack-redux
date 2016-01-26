var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var expressConfig = require('./config/default.json').express;

var appPort = expressConfig.appPort;
var devServerPort = expressConfig.devServerPort;
var host = expressConfig.host;

new WebpackDevServer(webpack(config), {
  contentBase: 'dist/',
  headers: { 'Access-Control-Allow-Origin': '*' },
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  noInfo: true,
  hot: true,
  proxy: {
    '*': 'http://' + host + ':' + appPort
  }
}).listen(devServerPort, host, function(err) {
  if (err) console.log(err);
  console.log('Listening at ' + host + ':' + devServerPort);
});