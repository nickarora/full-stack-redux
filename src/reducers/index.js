import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import todos from './todos';
import todoText from './todoText';

const rootReducer = combineReducers({
  todos,
  todoText,
  routing: routeReducer
});

export default rootReducer;
