import {
  REQUEST_TODO_TOGGLE,
  TODO_TOGGLE_SUCCESS,
  TODO_TOGGLE_FAIL,
  ADD_TODO_SUCCESS } from '../constants/actionTypes';

export default (state, action) => {
  switch (action.type) {
    case ADD_TODO_SUCCESS:
      if (state._id == action.tempId) {
        return {
          ...state,
          _id: action.todo._id,
          created_at: action.todo.created_at
        }
      }
    case REQUEST_TODO_TOGGLE:
    case TODO_TOGGLE_FAIL:
      if (state._id == action.todo._id) {
        return {
          ...state,
          completed: !state.completed
        }
      }
    case TODO_TOGGLE_SUCCESS:
    default:
      return state;
  }
}