import request from 'superagent';
import endpoint from './endpoint';

import { REQUEST_TODO_TOGGLE, TODO_TOGGLE_SUCCESS, TODO_TOGGLE_FAIL } from '../constants/consts'

export const toggleTodo = (todo) => {

  return function(dispatch) {

    dispatch(requestToggleTodo(todo));

    const update = { completed: !todo.completed, created_at: Date.now() };

    console.log(`${endpoint}/todos/${todo._id}`);
    request
      .put(`${endpoint}/todos/${todo._id}`)
      .send(update)
      .end( (err, res) => {
        console.log(err);
        const body = res.body;

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