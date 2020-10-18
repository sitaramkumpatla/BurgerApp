import {createStore,applyMiddleware} from 'redux'
import {reducer} from './Reducer'
import {composeWithDevTools} from 'redux-devtools-extension'
//import {logger} from 'redux-logger'
export const store = createStore(reducer,composeWithDevTools(applyMiddleware()))