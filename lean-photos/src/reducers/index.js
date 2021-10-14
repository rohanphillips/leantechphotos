import { combineReducers } from "redux";
import photosSlice from './photos'

export default combineReducers({
   photosState: photosSlice
});