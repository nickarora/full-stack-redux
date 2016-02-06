import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import todos from './todos';
import todoText from './todoText';

const rootReducer = combineReducers({
  todos,
  todoText,
  routing: routeReducer
});

export default rootReducer;