import * as todoService from './service/todo_service';

export const getTodos = (req, res) => {
  todoService.fetchTodos((err, todos) => {
    if (err) {
      res.status(400);
      return res.json({ error: err });
    }

    return res.json(todos);
  });
};

export const addTodo = ({ body }, res, io) => {
  if (!body.note || !body._id) {
    res.status(400);
    return res.json({ error: 'Insufficient information to create a todo' });
  }

  todoService.addTodo(body, (err, todo) => {
    if (err) {
      res.status(400);
      return res.json({ error: err });
    }

    io.emit('add-todo', todo);
    return res.json(todo);
  });
};

export const updateTodo = ({ params, body }, res) => {
  todoService.updateTodo(params.id, body, (err, conf) => {
    if (err) {
      res.status(400);
      return res.json({ error: err });
    }

    return res.json(conf);
  });
};

export const deleteTodo = ({ params }, res) => {
  todoService.deleteTodo(params.id, (err, conf) => {
    if (err) {
      res.status(400);
      return res.json({ error: err });
    }

    return res.json(conf);
  });
};
