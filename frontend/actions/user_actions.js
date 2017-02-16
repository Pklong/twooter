import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users,
});

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user,
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors,
});


export const fetchUsers = () => dispatch => (
  UserAPIUtil.fetchUsers()
    .then(users => dispatch(receiveUsers(users)))
);

export const fetchUser = name => dispatch => (
  UserAPIUtil.fetchUser(name)
    .then(user => dispatch(receiveUser(user)))
);

export const signup = user => dispatch => (
  UserAPIUtil.signup(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const login = user => dispatch => (
  UserAPIUtil.login(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
    UserAPIUtil.logout()
      .then(() => dispatch(receiveCurrentUser(null)))
);
