import { REQUEST_TODO_TOGGLE, TODO_TOGGLE_SUCCESS, TODO_TOGGLE_FAIL } from '../constants/consts';
import todo from './todo';

export default (state = null, action) => {
  switch (action.type) {
    case TODO_TOGGLE_FAIL:
    case TODO_TOGGLE_SUCCESS:
    case REQUEST_TODO_TOGGLE:
      return state.map(t => todo(t, action))
    default:
      return state;
  }
}