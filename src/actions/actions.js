import request from 'superagent';
import host from '../util/endpoint';

import randomHex from '../util/random_hex';

import * as types from '../constants/actionTypes';

const endpoint = `${host}/api`;

const requestToggleTodo = (todo) => ({ type: types.REQUEST_TODO_TOGGLE, todo });
const todoToggleSuccess = (todo) => ({ type: types.TODO_TOGGLE_SUCCESS, todo });
const todoToggleFail = (todo) => ({ type: types.TODO_TOGGLE_FAIL, todo });

export const toggleTodo = (todo) =>
  (dispatch) => {
    dispatch(requestToggleTodo(todo));
    const update = { completed: !todo.completed };

    request
      .put(`${endpoint}/todos/${todo._id}`)
      .send(update)
      .end((err, { body }) => {
        if (err) {
          dispatch(todoToggleFail(todo));
        } else {
          dispatch(todoToggleSuccess(body));
        }
      });
  };

const requestDelTodo = (todo) => ({ type: types.REQUEST_DEL_TODO, todo });
const delTodoSuccess = () => ({ type: types.DEL_TODO_SUCCESS });
const delTodoFail = (todo) => ({ type: types.DEL_TODO_FAIL, todo });

export const deleteTodo = (todo) =>
  (dispatch) => {
    dispatch(requestDelTodo(todo));

    request
      .del(`${endpoint}/todos/${todo._id}`)
      .end((err) => {
        if (err) {
          dispatch(delTodoFail(todo));
        } else {
          dispatch(delTodoSuccess());
        }
      });
  };

const requestAddTodo = (todo) => ({ type: types.REQUEST_ADD_TODO, todo });
const addTodoSuccess = (todo) => ({ type: types.ADD_TODO_SUCCESS, todo });
const addTodoFail = (todo) => ({ type: types.ADD_TODO_FAIL, todo });

export const addTodo = (inputText) =>
  (dispatch) => {
    if (inputText === '') { return; }

    const todo = { _id: randomHex(), note: inputText, completed: false, created_at: 'pending' };
    dispatch(requestAddTodo(todo));

    request
      .post(`${endpoint}/todos`)
      .send({ _id: todo._id, note: inputText })
      .end((err, { body }) => {
        if (err) {
          dispatch(addTodoFail(todo));
        } else {
          dispatch(addTodoSuccess(body));
        }
      });
  };

export const inputChange = (inputText) => ({ type: types.TEXT_INPUT_CHANGE, inputText });

export const pushAddTodo = (todo) => ({ type: types.PUSH_ADD_TODO, todo });
export const pushDeleteTodo = (todo) => ({ type: types.PUSH_DELETE_TODO, todo });
export const pushToggleTodo = (todo) => ({ type: types.PUSH_TOGGLE_TODO, todo });
