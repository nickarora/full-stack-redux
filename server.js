import path from 'path';
import Express from 'express';
import bodyParser from 'body-parser';
import serveStatic from 'serve-static';

import { handleRender } from './server/app';

const app = Express();
const port = 3000;

app.set('views', path.join(__dirname, 'server', 'views'));
app.set('view engine', 'ejs')

app.use(serveStatic(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('*', handleRender);

app.listen(port);
