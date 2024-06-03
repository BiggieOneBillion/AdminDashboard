import { API_BASE_URL } from "../../libs/constants";
import { getTokenFromCookies } from "./utils";
import axios from "axios";

const timeoutConfig = {
  timeout: 30000,
  timeoutErrorMessage: "Server taking too long to respond. Try again.",
};

export const apiWithAuth = (properties) =>
  axios.create({
    baseURL: API_BASE_URL,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${getTokenFromCookies}`,
      ...properties,
    },

    ...timeoutConfig,
  });

export const getApiResponse = (data) => {
  // console.log(data);
  return {
    status: true,
    data: data.data,
  };
};

export const getErrorResponse = (error) => {
  // console.log(error);
  return {
    status: false,
    data: error?.response?.data,
  };
};
