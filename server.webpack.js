var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.config');
var expressConfig = require('./config/default.json').express;

var appPort = process.env.PORT || expressConfig.appPort;
var devServerPort = expressConfig.devServerPort;
var host = expressConfig.host;

class DevServer {

  constructor() {
    this.server = new WebpackDevServer(webpack(config), {
      contentBase: 'dist/',
      headers: { 'Access-Control-Allow-Origin': '*' },
      publicPath: config.output.publicPath,
      historyApiFallback: true,
      noInfo: true,
      hot: true,
      proxy: {
        '*': 'http://' + host + ':' + appPort
      }
    });
  }


  startListening() {
    this.server.listen(devServerPort, host, function(err) {
      if (err) console.log(err);
      console.log('Listening at ' + host + ':' + devServerPort);
    });
  }

}

module.exports = new DevServer();
