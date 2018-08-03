import { SELECT_MAP_LOCATION, HOVER_MAP_LOCATION } from '../actions/index';

export default function(state = false, action) {
  switch (action.type) {
    case SELECT_MAP_LOCATION:
      return { ...state, selectedMap: action.payload };
    case HOVER_MAP_LOCATION:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
