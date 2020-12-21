import { GET_ALL_SCALES, SCALES_ERROR } from "./types";
import axios from "axios";

export const getAllScales = () => async (dispatch) => {
  try {
    const request = await axios.get("/api/scales");
    dispatch({
      type: GET_ALL_SCALES,
      payload: request.data,
    });
  } catch (e) {
    dispatch({
      type: SCALES_ERROR,
      payload: console.log(e),
    });
  }
};
