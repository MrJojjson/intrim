import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

/* eslint-disable no-underscore-dangle */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

export default function store(initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk)),
  );
}
