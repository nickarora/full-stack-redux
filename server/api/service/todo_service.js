import Todo from '../models/todo';

export const fetchTodos = (callback) => {
  Todo.find(callback);
}

export const addTodo = ( { note }, callback) => {
  new Todo({
    note: note,
    completed: false,
    created_at: Date.now()
  }).save(callback);
}