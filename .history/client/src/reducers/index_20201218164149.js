import { combineReducers } from "redux";
import { scalesReducer } from "./scalesReducer";

const rootReducer = combineReducers({
  scales: scalesReducer,
});

export default rootReducer;
