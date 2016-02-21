var spawn = require('child_process').spawn;

function MochaTestRunnerPlugin(options) {}

MochaTestRunnerPlugin.prototype.apply = function(compiler) {
  compiler.plugin('compile', function() {
    spawn('npm', ['test'], { stdio: 'inherit' });
  });
};

module.exports = MochaTestRunnerPlugin;
