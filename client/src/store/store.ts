import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './combineReducers';
import { saveAuthToken } from './reduxMiddlewares';
import initialState from './initialState';
export type IRootState = ReturnType<typeof rootReducer>;

const middlewares = [thunk, saveAuthToken];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
