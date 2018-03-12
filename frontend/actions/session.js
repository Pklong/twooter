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

export const login = user => dispatch =>
  SessionApi.login(user).then(({ data: user }) =>
    dispatch(loginUser(user))
  )

export const logout = () => dispatch =>
  SessionApi.logout().then(() => dispatch(logoutUser()))

export const signup = user => dispatch =>
  SessionApi.signup(user).then(({ data: user }) =>
    dispatch(loginUser(user))
  )
