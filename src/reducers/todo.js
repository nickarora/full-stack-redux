import { COMPLETE_TODO } from '../constants/consts';

export default (state, action) => {
  switch (action.type) {
    case COMPLETE_TODO:
      if (state._id == action.id) {
        return {
          ...state,
          completed: !state.completed
        }
      }
    default:
      return state;
  }
}