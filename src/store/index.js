import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { compact } from 'lodash';
import { persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';

import appReducer from '../reducers/appReducer';

export default function initializateStore() {
  const middlewares = compact([
    thunk.withExtraArgument(),
    __DEV__ ? createLogger() : null
  ]);

  const store = createStore(
    appReducer,
    {},
    compose(applyMiddleware(...middlewares))
  );

  persistStore(
    store,
    null,
    () => store.getState()
  );

  return store;
}
