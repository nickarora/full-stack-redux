import prodStore from './configureStore.prod';

let store = prodStore;

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  const devStore = require('./configureStore.dev');
  store = devStore;
}

export default store;
