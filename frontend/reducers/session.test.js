import reducer from './session'
import { LOGIN, LOGOUT } from '../actions/session'

describe('session reducer', () => {
  const initialState = {
    userId: null
  }

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle LOGIN', () => {
    const user = {
      name: 'pip-boy',
      id: 42
    }

    const action = {
      type: LOGIN,
      user
    }

    expect(reducer(initialState, action)).toEqual({
      userId: 42
    })
  })

  it('should handle LOGOUT', () => {
    const loggedInState = {
      userId: 42
    }

    expect(reducer(loggedInState, { type: LOGOUT })).toEqual(
      initialState
    )
  })
})
