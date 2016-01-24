import { createStore, applyMiddleware } from 'redux';
import { syncHistory } from 'redux-simple-router';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from '../reducers';

const logger = createLogger({
  level: 'info',
  collapsed: true
});

const simpleRouter = syncHistory(browserHistory);
const finalCreateStore = applyMiddleware(thunk, simpleRouter, logger)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(reducers, initialState);
  return store;
}