import { GET_ALL_OPERATORS, OPERATORS_ERROR } from "./types";
import axios from "axios";

export const getAllOperators = () => async (dispatch) => {
  try {
    const request = await axios.get("http://localhost:5000/api/operators");
    dispatch({
      type: GET_ALL_OPERATORS,
      payload: request.data,
    });
  } catch (e) {
    dispatch({
      type: OPERATORS_ERROR,
      payload: console.log(e),
    });
  }
};
