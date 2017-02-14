import {
  RECEIVE_USERS,
} from '../actions/user_actions';

const defaultState = {
  byId: {},
  allIds: [],
};

const UsersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return Object.assign({}, { byId: action.users, allIds: Object.keys(action.users) });
    default:
      return state;
  }
};

export default UsersReducer;
