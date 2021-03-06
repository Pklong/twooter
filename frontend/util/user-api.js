import axios from 'axios'
import setCSRF from './csrf-helper'

export const login = user => {
  return axios({
    method: 'POST',
    url: '/api/session',
    data: user,
    headers: setCSRF()
  })
}

export const logout = () => {
  return axios({
    method: 'DELETE',
    url: '/api/session',
    headers: setCSRF()
  })
}

export const signup = user => {
  return axios({
    method: 'POST',
    url: '/api/users',
    data: user,
    headers: setCSRF()
  })
}

export const destroyUser = name => {
  return axios({
    method: 'DELETE',
    url: `/api/users/${name}`,
    headers: setCSRF()
  })
}

export const fetchUser = name => {
  return axios.get(`/api/users/${name}`)
}

export const fetchUsers = () => {
  return axios.get('/api/users')
}
