import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import serveStatic from 'serve-static';
import expressConfig from './config/default.json';

import { handleRender } from './server/app';

import * as api from './server/api/http';

const app = express();
const port = process.env.PORT || expressConfig.express.appPort;

app.set('views', path.join(__dirname, 'server', 'views'));
app.set('view engine', 'ejs');

app.use(serveStatic(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/todos', api.getTodos);
app.post('/api/todos', api.addTodo);
app.put('/api/todos/:id', api.updateTodo);
app.delete('/api/todos/:id', api.deleteTodo);

app.get('*', handleRender);

app.listen(port);

if (process.env.NODE_ENV === 'production') {
  console.log(`Listening at ${expressConfig.express.host}:${port}`);
}

export default app;
