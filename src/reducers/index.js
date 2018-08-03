import { combineReducers } from 'redux';
import UserReducer from './user-reducer';
import ChillspotReducer from './chill-spot-reducer';
import MapStateReducer from './map-state-reducer';
const rootReducer = combineReducers({
  user: UserReducer,
  chillspots: ChillspotReducer,
  mapState: MapStateReducer
});

export default rootReducer;
