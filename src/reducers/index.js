import { combineReducers } from 'redux';
import UserReducer from './user-reducer';
import ChillspotReducer from './chill-spot-reducer';
const rootReducer = combineReducers({
  user: UserReducer,
  chillspots: ChillspotReducer
});

export default rootReducer;
