import Todo from '../models/todo';

export const fetchTodos = (callback) => {
  Todo.find(callback);
}

export const addTodo = ( { _id, note }, callback) => {
  new Todo({
    _id: _id,
    note: note,
    completed: false,
    created_at: Date.now()
  }).save(callback);
}

export const updateTodo = ( id, update, callback ) => {
  Todo.findByIdAndUpdate(id, update, {new: true}, callback);
}

export const deleteTodo = (id, callback) => {
  Todo.findByIdAndRemove(id, callback);
}