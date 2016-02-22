import io from 'socket.io-client';
import endpoint from './util/endpoint';
import { pushTodo } from './actions/actions';

export default (store) => {
  const socket = io.connect(endpoint);

  socket.on('add-todo', (todo) => {
    store.dispatch(pushTodo(todo));
  });
};
