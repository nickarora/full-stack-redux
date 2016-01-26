import path from 'path';
import Express from 'express';
import bodyParser from 'body-parser';
import serveStatic from 'serve-static';
import expressConfig from './config/default.json';

import { handleRender } from './server/app';

import * as api from './server/api/http';

const app = Express();
const port = expressConfig.express.appPort;

app.set('views', path.join(__dirname, 'server', 'views'));
app.set('view engine', 'ejs')

app.use(serveStatic(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/todos', api.getTodos);
app.get('*', handleRender);

app.listen(port);

export default app;

