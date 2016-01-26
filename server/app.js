import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { match, RouterContext } from 'react-router';
import { syncHistory } from 'redux-simple-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/lib/createMemoryHistory';
import thunk from 'redux-thunk';

import reducers from '../src/reducers';
import routes from './routes';

import * as todoService from './api/service/todo_service';

export function handleRender(req, res) {

  todoService.fetchTodos((err, todos) => {
    if (err) throw err;

    const initialState = { todos };

    const history = createHistory();
    const simpleRouter = syncHistory(history);
    const finalCreateStore = applyMiddleware(thunk, simpleRouter)(createStore);

    const store = finalCreateStore(reducers, initialState);

    simpleRouter.listenForReplays(store);

    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {

      if (error) {
        res.status(500).send(error.message)
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {

        const html = ReactDOMServer.renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        );

        res.render('index', { html: html, initialState: JSON.stringify(store.getState())} );
      } else {
        res.status(404).render('error');
      }
    });

  });

}
