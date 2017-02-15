import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import UsersReducer from './users_reducer';
import WootsReducer from './woots_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  users: UsersReducer,
  woots: WootsReducer,
});

export default rootReducer;
