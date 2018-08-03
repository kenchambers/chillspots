import { FETCH_USER_LOCATION } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USER_LOCATION:
      return { ...state, location: action.payload };
    default:
      return state;
  }
}
