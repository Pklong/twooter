import * as SessionActions from './session'
import * as SessionApi from '../util/user-api'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

describe('session actions', () => {
  it('should create an action to login a user', () => {
    const user = {
      id: 42,
      name: 'pip-boy'
    }
    const expectedAction = {
      type: SessionActions.LOGIN,
      user
    }

    expect(SessionActions.loginUser(user)).toEqual(expectedAction)
  })

  it('should create an action to logout a user', () => {
    const expectedAction = {
      type: SessionActions.LOGOUT
    }

    expect(SessionActions.logoutUser()).toEqual(expectedAction)
  })
})

const mock = new MockAdapter(axios)
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    mock.reset()
  })

  const user = { name: 'pip-boy', password: 'vault11' }
  const responseUser = { name: user.name, id: 42 }

  it('creates LOGIN when signing up a new user', () => {
    mock.onPost('/api/users', { user }).reply(200, responseUser)

    const expectedActions = [
      {
        type: SessionActions.LOGIN,
        user: responseUser
      }
    ]

    const store = mockStore({ users: {} })

    return store
      .dispatch(SessionActions.signup(user.name, user.password))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('creates LOGIN when logging in a user', () => {
    mock
      .onPost('/api/session', { user })
      .reply(200, { name: user.name, id: 42 })

    const expectedActions = [
      { type: SessionActions.LOGIN, user: responseUser }
    ]

    const store = mockStore({ users: {} })

    return store
      .dispatch(SessionActions.login(user.name, user.password))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('creates LOGOUT when logging out a user', () => {
    mock.onDelete('/api/session').reply(200, {})

    const expectedActions = [{ type: SessionActions.LOGOUT }]

    const store = mockStore({ users: {} })

    return store.dispatch(SessionActions.logout()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
