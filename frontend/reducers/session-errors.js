import { RECEIVE_SESSION_ERROR, LOGIN } from '../actions/session'

const initialState = { login: [], signup: [] }

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_SESSION_ERROR:
      return Object.assign({}, state, action.err)
    case LOGIN:
      return intialState
    default:
      return state
  }
}
