import * as WootAPIUtil from '../util/woot_api_util';


export const RECEIVE_ALL_WOOTS = 'RECEIVE_ALL_WOOTS';
export const RECEIVE_WOOT = 'RECEIVE_WOOT';
export const DELETE_WOOT = 'DELETE_WOOT';

export const receiveWoot = woot => ({
  type: RECEIVE_WOOT,
  woot,
});

export const receiveWoots = woots => ({
  type: RECEIVE_ALL_WOOTS,
  woots,
});

export const removeWoot = wootId => ({
  type: DELETE_WOOT,
  wootId,
});

export const fetchWoots = () => dispatch => (
  WootAPIUtil.fetchWoots()
    .then(woots => dispatch(receiveWoots(woots)))
);

export const fetchWoot = wootId => dispatch => (
  WootAPIUtil.fetchWoot(wootId)
    .then(woot => dispatch(receiveWoot(woot)))
);

export const createWoot = woot => dispatch => (
  WootAPIUtil.createWoot(woot)
    .then(newWoot => dispatch(receiveWoot(newWoot)))
);

export const destroyWoot = wootId => dispatch => (
  WootAPIUtil.destroyWoot(wootId)
    .then(() => dispatch(removeWoot(wootId)))
);
