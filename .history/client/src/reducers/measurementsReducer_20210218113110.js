import {
  GET_MEASUREMENTS_PER_SCALE,
  GET_ALL_MEASUREMENTS,
  GET_ALL_MEASUREMENTS_BY_GRID_NAME,
  GET_FILTERED_DATA,
} from "../actions/types";

const INITIAL_STATE = {
  measurementsPerScale: [],
  filteredData: [],
  measurements: [],
  loading: true,
};

const measurementsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MEASUREMENTS_PER_SCALE:
      return {
        ...state,
        measurementsPerScale: action.payload.data,
        loading: false,
      };
    case GET_FILTERED_DATA:
      return {
        ...state,
        filteredData: action.payload.data,
        loading: false,
      };
    // case GET_ALL_MEASUREMENTS_BY_GRID_NAME:
    //   return {
    //     ...state,
    //     measurementsByGridName: action.payload.data,
    //     loading: false,
    //   };
    case GET_ALL_MEASUREMENTS:
      return {
        ...state,
        measurements: action.payload.data,
        loading: false,
      };
    default:
      return state;
  }
};

export default measurementsReducer;
