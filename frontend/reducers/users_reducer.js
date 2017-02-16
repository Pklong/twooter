import {
  RECEIVE_USERS,
  RECEIVE_USER,
} from '../actions/user_actions';

const defaultState = {
  byId: {},
  allIds: [],
  detail: {}
};

const UsersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return Object.assign({}, { byId: action.users, allIds: Object.keys(action.users) });
    case RECEIVE_USER: {
      return Object.assign({}, state, { detail: action.user });
    }
    default:
      return state;
  }
};

export default UsersReducer;
