import { GET_ALL_SCALES } from "../actions/types";

const INITIAL_STATE = {
  connected: false,
  isLoaded: false,
  scales: [],
};

export const scaleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_SCALES:
      return {
        ...state,
        isLoaded: true,
        scales: action.payload,
      };
    default:
      return state;
  }
};
