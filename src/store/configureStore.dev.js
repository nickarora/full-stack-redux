import { compose, createStore, applyMiddleware } from 'redux';
import { syncHistory } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from '../reducers';
import DevTools from '../containers/DevTools';

const logger = createLogger({
  level: 'info',
  collapsed: true
});

const simpleRouter = syncHistory(browserHistory);

const finalCreateStore = compose(
  applyMiddleware(thunk, simpleRouter, logger),
  DevTools.instrument()
)(createStore);

module.exports = (initialState) => {
  const store = finalCreateStore(reducers, initialState);
  if (module.hot) { module.hot.accept('../reducers', () => store.replaceReducer(reducers)); }
  simpleRouter.listenForReplays(store);
  return store;
};
