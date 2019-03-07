import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authReducer';

const config = {
  key: 'inventory_store',
  storage
};

const appReducer = persistCombineReducers(config, {
  authReducer,
});

export default function rootReducer(state, action) {
  return appReducer(state, action);
}
