import { combineReducers } from 'redux'
import session from './session'
import users from './user'
import twoots from './twoot'

const index = combineReducers({
  session,
  users,
  twoots
})

export default index
