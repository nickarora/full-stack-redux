var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var devServerPort = 3000;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  hot: true,
  stats: {
    colors: true
  }
}).listen(devServerPort, 'localhost', function(err) {
  if (err) console.log(err);
  console.log('Listening at localhost:' + devServerPort);
});