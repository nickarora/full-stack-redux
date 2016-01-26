import Todo from '../models/todo';

export function fetchTodos(callback) {
  Todo.find((err, todos) => {
    if (err) { callback(err); }
    else { callback(null, todos); }
  });
}