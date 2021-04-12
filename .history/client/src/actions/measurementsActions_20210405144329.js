import {
  GET_MEASUREMENTS_PER_SCALE,
  GET_ALL_MEASUREMENTS,
  MEASUREMENTS_PER_SCALE_ERROR,
  GET_FILTERED_DATA,
  FILTERED_DATA_ERROR,
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

// export const getFilteredData = (filters = []) => async (dispatch) => {
//   try {
//     const data = {
//       filters,
//     };
//     const request = axios
//       .post("http://localhost:5000/api/measurements/id", data)
//       .then((response) => response.data);
//     dispatch({
//       type: GET_FILTERED_DATA,
//       payload: request,
//     });
//   } catch (e) {
//     dispatch({
//       type: FILTERED_DATA_ERROR,
//       payload: console.log(e),
//     });
//   }
// };

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
