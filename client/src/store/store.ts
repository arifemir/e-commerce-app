import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { rootReducer } from './combineReducers'
export type IRootState = ReturnType<typeof rootReducer>

const initialState = {}

const middlewares = [thunk]

export default createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)))
