import request from 'superagent';
import { REQUEST_TODO_TOGGLE, TODO_TOGGLE_SUCCESS, TODO_TOGGLE_FAIL } from '../constants/consts'
import endpoint from './endpoint';

export const toggleTodo = (todo) => {
  return function(dispatch) {
    dispatch(requestToggleTodo(todo));

    const update = { completed: !todo.completed, created_at: Date.now() };
    request
      .put(`${endpoint}/todos/${todo._id}`)
      .send(update)
      .end( (err, { body }) => {
        if (err)
          dispatch(todoToggleFail(body))
        else
          dispatch(todoToggleSuccess(body))
      });
  }
}

const requestToggleTodo = (todo) => {
  return { type: REQUEST_TODO_TOGGLE, todo}
}

const todoToggleSuccess = (todo) => {
  return { type: TODO_TOGGLE_SUCCESS, todo }
}

const todoToggleFail = (todo) => {
  return { type: TODO_TOGGLE_FAIL, todo }
}