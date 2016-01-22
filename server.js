import path from 'path';
import Express from 'express';
import bodyParser from 'body-parser';

const app = Express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(Express.static(path.join(__dirname, 'public')));

const handleRender = (req, res) => {
  res.send(renderFullPage());
}

const renderFullPage = () => {
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

app.get('/', handleRender);

app.listen(port);
