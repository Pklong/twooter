import { RECEIVE_TWOOTS } from '../actions/twoots'

const initialState = {}

const twoots = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_TWOOTS:
      return Object.assign({}, state, action.twoots)
    default:
      return state
  }
}

export const getTwoots = ({ twoots }) => Object.values(twoots)

export default twoots
