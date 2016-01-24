import devStore from './configureStore.dev';
import prodStore from './configureStore.prod';

let store = devStore;

if (process.env.NODE_ENV === 'production') {
  store = prodStore;
}

export default store;

