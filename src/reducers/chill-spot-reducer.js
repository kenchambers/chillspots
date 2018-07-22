import { FETCH_CHILL_SPOTS } from '../actions/chill-spots-actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_CHILL_SPOTS:
      console.log('-----------------');
      console.log(action.payload);
      console.log('-----------------');

      return { ...state, chillspots: action.payload };
    default:
      return state;
  }
}
