import * as todoService from './service/todo_service';

export function getTodos(req, res) {
  todoService.fetchTodos((err, todos) => {
    if (err) {
      res.status(400);
      res.json({error: err});
    } else {
      res.json(todos);
    }
  });
}