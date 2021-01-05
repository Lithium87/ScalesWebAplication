import {
  GET_MEASUREMENTS_PER_SCALE,
  MEASUREMENTS_PER_SCALE_ERROR,
} from "./types";
import axios from "axios";

export const getMeasurementsPerScale = () => async (dispatch) => {
  try {
    const request = axios.get(`${process.env.REACT_APP_API}/measurements/id`);
    dispatch({
      type: GET_MEASUREMENTS_PER_SCALE,
      payload: request.data,
    });
  } catch (e) {
    dispatch({
      type: MEASUREMENTS_PER_SCALE_ERROR,
      payload: console.log(e),
    });
  }
};
