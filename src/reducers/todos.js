import {
  REQUEST_TODO_TOGGLE,
  TODO_TOGGLE_SUCCESS,
  TODO_TOGGLE_FAIL,
  REQUEST_ADD_TODO,
  ADD_TODO_FAIL,
  ADD_TODO_SUCCESS,
  REQUEST_DEL_TODO,
  DEL_TODO_SUCCESS,
  DEL_TODO_FAIL } from '../constants/actionTypes';

import todo from './todo';

export default (state = null, action) => {
  switch (action.type) {

    case DEL_TODO_FAIL:
    case REQUEST_ADD_TODO:
      return [
        ...state,
        action.todo
      ];

    case REQUEST_DEL_TODO:
    case ADD_TODO_FAIL:
      return state.filter(t => t._id !== action.todo._id);

    case ADD_TODO_SUCCESS:
    case TODO_TOGGLE_FAIL:
    case TODO_TOGGLE_SUCCESS:
    case REQUEST_TODO_TOGGLE:
      return state.map(t => todo(t, action));

    case DEL_TODO_SUCCESS:
    default:
      return state;

  }
};
