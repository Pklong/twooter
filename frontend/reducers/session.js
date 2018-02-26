import { LOGIN, LOGOUT } from '../actions/session'

const initialState = {
  userId: null
}

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, { userId: action.user.id })
    case LOGOUT:
      return initialState
    default:
      return state
  }
}

export default sessionReducer
