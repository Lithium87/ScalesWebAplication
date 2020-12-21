import axios from "axios";
import { GET_ALL_SCALES } from "./types";

export const getAllScales = () => {
  const request = axios
    .get("http://localhost:5000/api/scales")
    .then((res) => res.data);

  return {
    type: GET_ALL_SCALES,
    payload: request,
  };
};
