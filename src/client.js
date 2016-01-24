import ReactDOM from 'react-dom';
import React from 'react';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { syncHistory } from 'redux-simple-router';
import { browserHistory } from 'react-router';

import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import routes from '../server/routes';
import reducers from './reducers';

import '../style/pure.css';
import '../style/main.css';

/* require components */
import App from '../src/containers/App';
import DevTools from '../src/containers/DevTools';

let initialState = window.__INITIAL_STATE__;

const logger = createLogger({
  level: 'info',
  collapsed: true
});

const simpleRouter = syncHistory(browserHistory);

const finalCreateStore = compose(
  applyMiddleware(thunk, simpleRouter, logger),
  DevTools.instrument()
)(createStore);

const store = finalCreateStore(reducers, initialState);
if (module.hot) { module.hot.accept( './reducers', () => store.replaceReducer(reducers) ); }

simpleRouter.listenForReplays(store);

const appEl = document.getElementById('app');
if (appEl) {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </Provider>,
    appEl
  );
}

/* DevTools mounted on a separate node to prevent server-side rendering checksum from failing */
const devtoolEl = document.getElementById('devtools');
if (devtoolEl) {
  ReactDOM.render(
    <DevTools store={store} />,
    devtoolEl
  );
}
