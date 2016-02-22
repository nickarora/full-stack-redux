import path from 'path';
import express from 'express';
import http from 'http';
import socket from 'socket.io';
import bodyParser from 'body-parser';
import serveStatic from 'serve-static';
import expressConfig from './config/default.json';

import { handleRender } from './server/app';

import * as api from './server/api/http';

const app = express();
const server = http.createServer(app);
const io = socket(server);

const port = process.env.PORT || expressConfig.express.appPort;

app.set('views', path.join(__dirname, 'server', 'views'));
app.set('view engine', 'ejs');

app.use(serveStatic(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/todos', api.getTodos);
app.post('/api/todos', (req, res) => api.addTodo(req, res, io));
app.put('/api/todos/:id', api.updateTodo);
app.delete('/api/todos/:id', (req, res) => api.deleteTodo(req, res, io));

app.get('*', handleRender);

server.listen(port);

if (process.env.NODE_ENV === 'production') {
  console.log(`Listening at ${expressConfig.express.host}:${port}`); // eslint-disable-line no-console, max-len
}

export default server;
