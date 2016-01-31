import { COMPLETE_TODO } from '../constants/consts';
import todo from './todo';

export default (state = null, action) => {
  switch (action.type) {
    case COMPLETE_TODO:
      return state.map(t => todo(t, action))
    default:
      return state;
  }
}