var path = require('path');
var Express = require('express');
var bodyParser = require('body-parser');

var app = Express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(Express.static(path.join(__dirname, 'public')));

app.get('/', handleRender);

function handleRender(req, res) {
  res.send(renderFullPage());
}

function renderFullPage() {
  return (
      '<!doctype html>' +
      '<html>' +
        '<head>' +
          '<title>Redux Rethink</title>' +
          "<link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,200' rel='stylesheet' type='text/css'>" +
          "<link href='/stylesheets/style.css' rel='stylesheet' type='text/css'>" +
        '</head>' +
        '<body>' +
          '<h3>Hello World</h3>' +
          '<div id="app"></div>' +
        '</body>' +
      '</html>'
  );
}

module.exports = app;
