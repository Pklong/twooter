import { LOGIN } from '../actions/session'
import { RECEIVE_TWOOTS } from '../actions/twoots'

const initialState = {}

const users = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, { [action.user.id]: action.user })

    case RECEIVE_TWOOTS:
      return Object.assign({}, state, action.users)
    default:
      return state
  }
}

export default users
