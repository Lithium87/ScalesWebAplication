import { GET_ALL_SCALES } from "../actions/types";

const INITIAL_STATE = {
  scales: [],
  loading: true,
};

const scalesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_SCALES:
      return {
        ...state,
        scales: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default scalesReducer;
