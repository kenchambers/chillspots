import {
  FETCH_CHILL_SPOTS,
  GET_CHILL_SPOT_DETAIL
} from '../actions/chill-spots-actions';

const convertPayloadToArray = (state, payload) => {
  const array = [];
  Object.keys(...state, payload).map(function(key) {
    array.push((payload[key] = payload[key]));
  });
  return array;
};

export default function(state = false, action) {
  switch (action.type) {
    case FETCH_CHILL_SPOTS:
      return convertPayloadToArray(state, action.payload);
    case GET_CHILL_SPOT_DETAIL:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
