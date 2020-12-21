import { combineReducers } from "redux";
import { scalesReducer } from "./scaleReducer";

const rootReducer = combineReducers({
  scales: scalesReducer,
});

export default rootReducer;
