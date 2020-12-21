import axios from "axios";
import {
  GET_ALL_SCALES_BEGIN,
  GET_ALL_SCALES_SUCCESS,
  GET_ALL_SCALES_FAILURE,
} from "./types";

export const getAllScales = () => {
  return (dispatch) => {
    dispatch(getAllScalesBegin());
    return axios
      .get("http://localhost:5000/api/scales")
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(getAllScalesSuccess(json.scales));
        return json.scales;
      })
      .catch((error) => dispatch(getAllScalesFailure(error)));
  };
};

export const getAllScalesBegin = () => ({
  type: GET_ALL_SCALES_BEGIN,
});

export const getAllScalesSuccess = (scales) => ({
  type: GET_ALL_SCALES_SUCCESS,
  payload: { scales },
});

export const getAllScalesFailure = (error) => ({
  type: GET_ALL_SCALES_FAILURE,
  payload: { error },
});

const handleErrors = (response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
};
