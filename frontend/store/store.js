import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import index from '../reducers/index'

const store = preloaded =>
  createStore(index, preloaded, applyMiddleware(...[thunk, logger]))

export default store
