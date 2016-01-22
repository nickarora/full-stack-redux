import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { Route, match, RouterContext } from 'react-router';
import { syncHistory } from 'redux-simple-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/lib/createMemoryHistory';
import thunk from 'redux-thunk';

import reducers from '../src/reducers';
import routes from './routes';

export function handleRender(req, res) {

  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {

    const initialState = { todos: ['take out trash', 'buy milk'] };

    const history = createHistory();
    const simpleRouter = syncHistory(history);
    const createStoreWithMiddleware = applyMiddleware(thunk, simpleRouter)(createStore);
    const store = createStoreWithMiddleware(reducers, initialState);

    // Eventually will help us when we install redux devtools
    simpleRouter.listenForReplays(store);

    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const html = ReactDOMServer.renderToString(
        <div>
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        </div>
      );
      res.render('index', { html: html, initialState: JSON.stringify(store.getState())});
    } else {
      res.status(404).render('error');
    }

  });

}
