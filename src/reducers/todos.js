import {
  REQUEST_TODO_TOGGLE,
  TODO_TOGGLE_SUCCESS,
  TODO_TOGGLE_FAIL,
  REQUEST_ADD_TODO,
  ADD_TODO_FAIL} from '../constants/actionTypes';

import todo from './todo';

export default (state = null, action) => {
  switch (action.type) {
    case REQUEST_ADD_TODO:
      return [
        ...state,
        action.todo
      ];
    case ADD_TODO_FAIL:
      return state.filter(t => t._id != action.todo._id)
    case TODO_TOGGLE_FAIL:
    case TODO_TOGGLE_SUCCESS:
    case REQUEST_TODO_TOGGLE:
      return state.map(t => todo(t, action))
    default:
      return state;
  }
}