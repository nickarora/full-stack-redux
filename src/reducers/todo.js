import { REQUEST_TODO_TOGGLE, TODO_TOGGLE_SUCCESS, TODO_TOGGLE_FAIL } from '../constants/consts';

export default (state, action) => {
  switch (action.type) {
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