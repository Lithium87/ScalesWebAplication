import {
  GET_MEASUREMENTS_PER_SCALE,
  GET_ALL_MEASUREMENTS,
  GET_ALL_MEASUREMENTS_BY_GRID_NAME,
  GET_ALL_MEASUREMENTS_BY_GRID_ERROR,
  MEASUREMENTS_PER_SCALE_ERROR,
} from "./types";
import axios from "axios";

export const getMeasurementsPerScale = () => async (dispatch) => {
  try {
    const request = axios.get("http://localhost:5000/api/measurements/id");
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

export const getAllMeasurements = () => async (dispatch) => {
  try {
    const request = axios.get("http://localhost:5000/api/measurements");
    dispatch({
      type: GET_ALL_MEASUREMENTS,
      payload: request.data,
    });
  } catch (e) {
    dispatch({
      type: MEASUREMENTS_PER_SCALE_ERROR,
      payload: console.log(e),
    });
  }
};

export const getMeasurementsByGridName = () => async (dispatch) => {
  try {
    const request = axios.get(
      "http://localhost:5000/api/measurements/grid_name"
    );
    dispatch({
      type: GET_ALL_MEASUREMENTS_BY_GRID_NAME,
      payload: request.data,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_MEASUREMENTS_BY_GRID_ERROR,
      payload: console.log(e),
    });
  }
};
