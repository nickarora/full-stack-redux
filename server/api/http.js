import * as todoService from './service/todo_service';

export const getTodos = (req, res) => {
  todoService.fetchTodos((err, todos) => {
    if (err) {
      res.status(400);
      return res.json({ error: err });
    }

    return res.json(todos);
  });
}

export const addTodo = ({ body }, res) => {
  if (!body.note) {
    res.status(400);
    return res.json({ error: "Can't Add Blank Todo" });
  }

  todoService.addTodo(body, (err, todo) => {
    if (err) {
      res.status(400);
      return res.json({ error: err});
    }

    return res.json(todo);
  });
}