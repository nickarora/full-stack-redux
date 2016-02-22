import io from 'socket.io-client';
import endpoint from './util/endpoint';
import { pushAddTodo, pushDeleteTodo, pushToggleTodo } from './actions/actions';

export default (store) => {
  const socket = io.connect(endpoint);

  socket.on('add-todo', (todo) => {
    store.dispatch(pushAddTodo(todo));
  });

  socket.on('delete-todo', (todo) => {
    store.dispatch(pushDeleteTodo(todo));
  });

  socket.on('toggle-todo', (todo) => {
    store.dispatch(pushToggleTodo(todo));
  });
};
