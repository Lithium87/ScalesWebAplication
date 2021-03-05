import { combineReducers } from "redux";
import scales from "./scalesReducer";
import measurementsPerScale from "./measurementsReducer";
import measurements from "./measurementsReducer";
import operators from "./operatorsReducer";

const rootReducer = combineReducers({
  scales,
  measurementsPerScale,
  measurements,
  operators,
});

export default rootReducer;
