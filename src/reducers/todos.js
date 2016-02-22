import {
  REQUEST_TODO_TOGGLE,
  TODO_TOGGLE_SUCCESS,
  TODO_TOGGLE_FAIL,
  REQUEST_ADD_TODO,
  ADD_TODO_FAIL,
  ADD_TODO_SUCCESS,
  REQUEST_DEL_TODO,
  DEL_TODO_SUCCESS,
  DEL_TODO_FAIL,
  PUSH_ADD_TODO,
  PUSH_DELETE_TODO,
  PUSH_TOGGLE_TODO } from '../constants/actionTypes';

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
    case PUSH_DELETE_TODO:
    case ADD_TODO_FAIL:
      return state.filter(t => t._id !== action.todo._id);

    case ADD_TODO_SUCCESS:
    case TODO_TOGGLE_FAIL:
    case TODO_TOGGLE_SUCCESS:
    case REQUEST_TODO_TOGGLE:
    case PUSH_TOGGLE_TODO:
      return state.map(t => todo(t, action));

    case PUSH_ADD_TODO:
      if (state.some(t => t._id === action.todo._id)) {
        return state;
      }

      return [
        ...state,
        action.todo
      ];

    case DEL_TODO_SUCCESS:
    default:
      return state;

  }
};
