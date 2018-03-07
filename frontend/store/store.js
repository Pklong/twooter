import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import index from '../reducers/index'

const middleware = [thunk]

if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger')
  middleware.push(logger)
}
const store = preloaded =>
  createStore(index, preloaded, applyMiddleware(...middleware))

export default store
