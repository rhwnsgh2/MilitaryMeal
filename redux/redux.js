import {combineReducers, createStore, Reducer, Store} from 'redux';

import {menuReducer} from './menuReducer';
import {tokenReducer} from './tokenReducer';

const rootReducer = combineReducers({
  menu: menuReducer,
  token: tokenReducer,
});

const store = createStore(rootReducer);

export default store;
