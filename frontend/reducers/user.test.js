import reducer from './user'
import { LOGIN } from '../actions/session'

describe('users reducer', () => {
  const initialState = {}

  const populatedState = {
    3: {
      name: 'Deacon',
      id: 3
    },
    5: {
      name: 'VaultDweller',
      id: 5
    }
  }

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

  it('should handle LOGIN', () => {
    const newUser = {
      name: 'Pip-Boy',
      id: 42
    }

    const action = {
      type: LOGIN,
      user: newUser
    }

    const newState = {
      3: {
        name: 'Deacon',
        id: 3
      },
      5: {
        name: 'VaultDweller',
        id: 5
      },
      42: {
        name: 'Pip-Boy',
        id: 42
      }
    }

    expect(reducer(populatedState, action)).toEqual(newState)
  })
})
