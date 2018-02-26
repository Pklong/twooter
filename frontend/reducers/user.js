import { LOGIN } from '../actions/session'

const initialState = {}

const users = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, { [action.user.id]: action.user })
    default:
      return state
  }
}

export default users
