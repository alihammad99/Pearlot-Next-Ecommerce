import { combineReducers } from "redux";
import basketReducers from "./items";

export default combineReducers({
  basketState: basketReducers,
});