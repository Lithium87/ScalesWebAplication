import { GET_MEASUREMENTS_PER_SCALE } from "../actions/types";

const INITIAL_STATE = {
  measurementsPerScale: [],
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
    default:
      return state;
  }
};

export default measurementsReducer;
