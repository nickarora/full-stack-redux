import io from 'socket.io-client';
import endpoint from './util/endpoint';
import { pushTodo, requestDelTodo } from './actions/actions';

export default (store) => {
  const socket = io.connect(endpoint);

  socket.on('add-todo', (todo) => {
    store.dispatch(pushTodo(todo));
  });

  socket.on('delete-todo', (todo) => {
    store.dispatch(requestDelTodo(todo));
  });
};
