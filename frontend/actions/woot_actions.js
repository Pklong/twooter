import * as TwootAPIUtil from '../util/twoot_api_util';


export const RECEIVE_ALL_TWOOTS = 'RECEIVE_ALL_TWOOTS';
export const RECEIVE_TWOOT = 'RECEIVE_TWOOT';
export const DELETE_TWOOT = 'DELETE_TWOOT';

export const receiveTwoot = twoot => ({
  type: RECEIVE_TWOOT,
  twoot,
});

export const receiveTwoots = twoots => ({
  type: RECEIVE_ALL_TWOOTS,
  twoots,
});

export const removeTwoot = twootId => ({
  type: DELETE_WOOT,
  twootId,
});

export const fetchTwoots = () => dispatch => (
  TwootAPIUtil.fetchTwoots()
    .then(twoots => dispatch(receiveTwoots(twoots)))
);

export const fetchTwoot = twootId => dispatch => (
  TwootAPIUtil.fetchTwoot(twootId)
    .then(twoot => dispatch(receiveTwoot(twoot)))
);

export const createTwoot = twoot => dispatch => (
  TwootAPIUtil.createTwoot(twoot)
    .then(newTwoot => dispatch(receiveTwoot(newTwoot)))
);

export const destroyTwoot = twootId => dispatch => (
  TwootAPIUtil.destroyTwoot(twootId)
    .then(() => dispatch(removeTwoot(wootId)))
);
