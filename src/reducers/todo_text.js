import { TEXT_INPUT_CHANGE } from '../constants/action_types';

export default (state = null, action) => {
  switch (action.type) {
    case TEXT_INPUT_CHANGE:
      return action.inputText;
    default:
      return state;
  }
}