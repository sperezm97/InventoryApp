import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import counterReducer from './counterReducer';

const config = {
  key: 'inventory_store',
  storage
};

const appReducer = persistCombineReducers(config, {
  counterReducer,
});

export default function rootReducer(state, action) {
  return appReducer(state, action);
}
