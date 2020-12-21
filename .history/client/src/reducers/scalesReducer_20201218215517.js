import {
  GET_ALL_SCALES_BEGIN,
  GET_ALL_SCALES_SUCCESS,
  GET_ALL_SCALES_FAILURE,
} from "../actions/types";

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null,
};

const scalesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_SCALES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ALL_SCALES_SUCCESS:
      return {
        ...state,
        loading: false,
        scales: action.payload,
      };
    case GET_ALL_SCALES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      };
    default:
      return state;
  }
};

export default scalesReducer;
