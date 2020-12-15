import { combineReducers } from "redux";
import { scaleReducer } from "./scaleReducer";

const rootReducer = combineReducers({
  scale: scaleReducer,
});

export default rootReducer;
