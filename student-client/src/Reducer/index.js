import { combineReducers } from "redux";
import studentReducer from "./studentReducer";
export default combineReducers({
  dataStudent: studentReducer,
});
