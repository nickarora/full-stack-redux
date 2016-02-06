import request from 'superagent';
import endpoint from './endpoint';

import * as types from '../constants/action_types'

export const toggleTodo = (todo) => {

  return function(dispatch) {

    dispatch(requestToggleTodo(todo));

    const update = { completed: !todo.completed };

    request
      .put(`${endpoint}/todos/${todo._id}`)
      .send(update)
      .end( (err, res) => {
        const body = res.body;

        if (err)
          dispatch(todoToggleFail(body))
        else
          dispatch(todoToggleSuccess(body))
      });
  }
};

export const addTodo = (todo) => {
  return function(dispatch) {
  }
}

export const inputChange = (inputText) => {

  return {
    type: types.TEXT_INPUT_CHANGE,
    inputText
  }
}

const requestToggleTodo = (todo) => {
  return { type: types.REQUEST_TODO_TOGGLE, todo}
};

const todoToggleSuccess = (todo) => {
  return { type: types.TODO_TOGGLE_SUCCESS, todo }
};

const todoToggleFail = (todo) => {
  return { type: types.TODO_TOGGLE_FAIL, todo }
};