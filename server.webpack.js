const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.dev.config');
const expressConfig = require('./config/default.json').express;

const appPort = process.env.PORT || expressConfig.appPort;
const devServerPort = expressConfig.devServerPort;
const host = expressConfig.host;

new WebpackDevServer(webpack(config), {
  contentBase: 'dist/',
  headers: { 'Access-Control-Allow-Origin': '*' },
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  noInfo: true,
  hot: true,
  proxy: {
    '*': `http://${host}:${appPort}`
  }
}).listen(devServerPort, host, (err) => {
  if (err) console.log(err);
  console.log(`Listening at ${host}:${devServerPort}`);
});
