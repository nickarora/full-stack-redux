import ReactDOM from 'react-dom';
import React from 'react';

import { createStore, applyMiddleware } from 'redux';
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

let initialState = window.__INITIAL_STATE__;

const logger = createLogger({
  level: 'info',
  collapsed: true
});

const simpleRouter = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(thunk, simpleRouter, logger)(createStore);
const store = createStoreWithMiddleware(reducers, initialState);

simpleRouter.listenForReplays(store);

const domEl = document.getElementById('app');
if (domEl) {
  ReactDOM.render(
    <div>
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={App}></Route>
        </Router>
      </Provider>
    </div>,
    domEl
  );
}
