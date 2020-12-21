import { combineReducers } from "redux";
import scales from "./scalesReducer";

const rootReducer = combineReducers({
  scales,
});

export default rootReducer;
