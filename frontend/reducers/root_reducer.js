import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import UsersReducer from './users_reducer';
import TwootsReducer from './twoots_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  users: UsersReducer,
  twoots: TwootsReducer,
});

export default rootReducer;
