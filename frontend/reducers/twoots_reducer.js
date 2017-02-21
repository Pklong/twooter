import {
  RECEIVE_ALL_TWOOTS,
  RECEIVE_TWOOT,
  DELETE_TWOOT,
} from '../actions/twoot_actions';

const defaultState = {
  byId: {},
  allIds: [],
};

const TwootsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_ALL_TWOOTS:
      return Object.assign({}, { byId: action.twoots, allIds: Object.keys(action.twoots) });

    case RECEIVE_TWOOT: {
      const newById = Object.assign({}, state.byId, { [action.twoot.id]: action.twoot });
      const newAllIds = [...state.allIds];
      if (!newAllIds.includes(action.twoot.id)) {
        newAllIds.push(action.twoot.id);
      }
      return Object.assign({}, state, { byId: newById, allIds: newAllIds });
    }

    case DELETE_TWOOT: {
      const newState = Object.assign({}, state);
      delete newState.byId[action.twootId];
      newState.allIds = newState.allIds.filter(id => +id !== action.twootId);
      return newState;
    }

    default:
      return state;
  }
};

export default TwootsReducer;
