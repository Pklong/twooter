import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  LOGOUT } from '../actions/user_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: [],
});

const userReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER: {
      const user = action.currentUser;
      return Object.assign({}, nullUser, { user });
    }
    case LOGOUT:
      return Object.assign({}, nullUser);
    case RECEIVE_ERRORS: {
      const errors = action.errors;
      return Object.assign({}, nullUser, { errors });
    }
    default:
      return state;
  }
};

export default userReducer;
