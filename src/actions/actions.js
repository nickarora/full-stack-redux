import request from 'superagent';
import shortid from 'shortid';
import endpoint from './endpoint';

import * as types from '../constants/actionTypes'

export const toggleTodo = (todo) => {

  return function(dispatch) {

    dispatch(requestToggleTodo(todo));
    const update = { completed: !todo.completed };
    request
      .put(`${endpoint}/todos/${todo._id}`)
      .send(update)
      .end( (err, { body }) => {
        if (err)
          dispatch(todoToggleFail(todo))
        else
          dispatch(todoToggleSuccess(body))
      });
  }
};

export const deleteTodo = (todo) => {
  return function(dispatch) {
    dispatch(requestDelTodo(todo));

    request
      .del(`${endpoint}/todos/${todo._id}`)
      .end( (err, { body }) => {
        if (err)
          dispatch(delTodoFail(todo))
        else
          dispatch(delTodoSuccess())
      });
  }
};

export const addTodo = (inputText) => {
  return function(dispatch) {
    const todo = { _id: shortid.generate(), note: inputText, completed: false, created_at: 'pending' };
    dispatch(requestAddTodo(todo));

    request
      .post(`${endpoint}/todos`)
      .send({ note: inputText })
      .end( (err, { body }) => {
        if (err)
          dispatch(addTodoFail(todo))
        else
          dispatch(addTodoSuccess(body, todo._id))
      });
  }
}

export const inputChange = (inputText) => {

  return {
    type: types.TEXT_INPUT_CHANGE,
    inputText
  }
};

const requestAddTodo = (todo) => {
  return {
    type: types.REQUEST_ADD_TODO,
    todo
  }
};

const addTodoSuccess = (todo, tempId) => {
  return { type: types.ADD_TODO_SUCCESS, todo, tempId }
};

const addTodoFail = (todo) => {
  return { type: types.ADD_TODO_FAIL, todo }
};

const requestDelTodo = (todo) => {
  return {
    type: types.REQUEST_DEL_TODO,
    todo
  }
};

const delTodoSuccess = () => {
  return { type: types.DEL_TODO_SUCCESS }
};

const delTodoFail = (todo) => {
  return { type: types.DEL_TODO_FAIL, todo }
};

const requestToggleTodo = (todo) => {
  return { type: types.REQUEST_TODO_TOGGLE, todo}
};

const todoToggleSuccess = (todo) => {
  return { type: types.TODO_TOGGLE_SUCCESS, todo }
};

const todoToggleFail = (todo) => {
  return { type: types.TODO_TOGGLE_FAIL, todo }
};