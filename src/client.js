import ReactDOM from 'react-dom';
import React from 'react';

import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { browserHistory } from 'react-router';

import routes from '../server/routes';
import reducers from './reducers';
import configureStore from './store/configureStore';

// uncomment if you prefer client-side only css
// import '../style/main.scss';

let initialState = window.__INITIAL_STATE__;

console.log(initialState);
const store = configureStore(initialState);

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
if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  const DevTools = require('../src/containers/DevTools');
  const devtoolEl = document.getElementById('devtools');
  if (devtoolEl) {
    ReactDOM.render(
      <DevTools store={store} />,
      devtoolEl
    );
  }
}

