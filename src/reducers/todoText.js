import { TEXT_INPUT_CHANGE, REQUEST_ADD_TODO } from '../constants/actionTypes';

export default (state = null, action) => {
  switch (action.type) {
    case REQUEST_ADD_TODO:
      return '';
    case TEXT_INPUT_CHANGE:
      return action.inputText;
    default:
      return state;
  }
};
