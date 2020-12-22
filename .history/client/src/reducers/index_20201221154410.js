import { combineReducers } from "redux";
import scales from "./scalesReducer";
import measurementsPerScale from "./measurementsReducer";

const rootReducer = combineReducers({
  scales,
  measurementsPerScale,
});

export default rootReducer;
