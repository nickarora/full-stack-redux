import io from 'socket.io-client';
import endpoint from './util/endpoint';

export default () => {
  const socket = io.connect(endpoint);

  socket.on('add-todo', () => {
    console.log('hi');
  });
};
