/**
 * This is where I'll implement redux router (eventually)
 * and provide initial state to the store
 */

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import App from '../src/containers/App';

import reducers from '../src/reducers';

const initialState = {
  todos: []
};

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers, initialState);

export function handleRender(req, res) {

  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  res.render('index', { html: html, initialState: JSON.stringify(store.getState())});
}
