import { combineReducers } from "redux";
import { scaleReducer } from "./scaleReducer";

const rootReducer = combineReducers({
  scales: scaleReducer,
});

export default rootReducer;
