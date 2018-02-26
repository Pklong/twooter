export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

import * as SessionApi from '../util/user-api'

export const loginUser = user => ({
  type: LOGIN,
  user
})

export const logoutUser = () => ({
  type: LOGOUT
})

export const login = (name, pw) => dispatch =>
  SessionApi.login(name, pw).then(({ data: user }) =>
    dispatch(loginUser(user))
  )

export const logout = () => dispatch =>
  SessionApi.logout().then(() => dispatch(logoutUser()))

export const signup = (name, pw) => dispatch =>
  SessionApi.signup(name, pw).then(({ data: user }) =>
    dispatch(loginUser(user))
  )
