import * as Api from '../util/twoot-api'

export const RECEIVE_TWOOTS = 'RECEIVE_TWOOTS'

const receiveTwoots = ({ users, twoots }) => ({
  type: RECEIVE_TWOOTS,
  users,
  twoots
})

export const fetchTwoots = () => dispatch =>
  Api.fetchTwoots().then(({ data }) => dispatch(receiveTwoots(data)))
