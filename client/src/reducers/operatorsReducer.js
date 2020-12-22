import { GET_ALL_OPERATORS } from "../actions/types";

const INITIAL_STATE = {
  operators: [],
  loading: true,
};

const operatorsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_OPERATORS:
      return {
        ...state,
        operators: action.payload.data,
        loading: false,
      };
    default:
      return state;
  }
};

export default operatorsReducer;
