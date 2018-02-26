import { combineReducers } from 'redux'
import session from './session'
import users from './user'

const index = combineReducers({
  session,
  users
})

export default index
