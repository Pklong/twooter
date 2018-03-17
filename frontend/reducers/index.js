import { combineReducers } from 'redux'
import session from './session'
import users from './user'
import twoots from './twoot'
import errors from './errors'

const index = combineReducers({
  session,
  users,
  twoots,
  errors
})

export default index
