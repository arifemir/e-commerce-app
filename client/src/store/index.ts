import {createStore, applyMiddleware, Middleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {rootReducer} from './combineReducers'
export type RootState = ReturnType<typeof rootReducer>

const middlewares = [thunk]

export default createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(...middlewares)))
