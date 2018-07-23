import { FETCH_CHILL_SPOTS } from '../actions/chill-spots-actions';

export default function(state = false, action) {
  switch (action.type) {
    case FETCH_CHILL_SPOTS:
      return { ...state, results: action.payload };
    default:
      return state;
  }
}
