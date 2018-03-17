export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const RECEIVE_SESSION_ERROR = 'RECEIVE_SESSION_ERROR'

import * as SessionApi from '../util/user-api'

export const loginUser = user => ({
  type: LOGIN,
  user
})

export const logoutUser = () => ({
  type: LOGOUT
})

export const receiveError = err => ({
  type: RECEIVE_SESSION_ERROR,
  err
})

export const login = user => dispatch =>
  SessionApi.login(user)
    .then(({ data: user }) => dispatch(loginUser(user)))
    .catch(err =>
      dispatch(receiveError({ login: err.response.data, signup: [] }))
    )

export const logout = () => dispatch =>
  SessionApi.logout().then(() => dispatch(logoutUser()))

export const signup = user => dispatch =>
  SessionApi.signup(user)
    .then(({ data: user }) => dispatch(loginUser(user)))
    .catch(err =>
      dispatch(receiveError({ signup: err.response.data, login: [] }))
    )
