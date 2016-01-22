import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import todos from './todos';

const rootReducer = combineReducers({
  todos,
  routing: routeReducer
});

export default rootReducer;