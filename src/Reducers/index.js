import { combineReducers } from "redux";
import MerosReducer from "./MerosReducer";

export default combineReducers({
  meros: MerosReducer,
});
