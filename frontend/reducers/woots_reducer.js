import {
  RECEIVE_ALL_WOOTS,
  RECEIVE_WOOT,
  DELETE_WOOT,
} from '../actions/woot_actions';

const defaultState = {
  byId: {},
  allIds: [],
};

const WootsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_ALL_WOOTS:
      return Object.assign({}, { byId: action.woots, allIds: Object.keys(action.woots) });

    case RECEIVE_WOOT: {
      const newById = Object.assign({}, state.byId, { [action.woot.id]: action.woot });
      const newAllIds = [...state.allIds];
      if (!newAllIds.includes(action.woot.id)) {
        newAllIds.push(action.woot.id);
      }
      return Object.assign({}, state, { byId: newById, allIds: newAllIds });
    }

    case DELETE_WOOT: {
      const newState = Object.assign({}, state);
      delete newState.byId[action.wootId];
      newState.allIds = newState.allIds.filter(id => +id !== action.wootId);
      return newState;
    }

    default:
      return state;
  }
};

export default WootsReducer;
