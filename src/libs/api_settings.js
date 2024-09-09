import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "https://api.prestigecalendar.com/api/v1/",
});

api.interceptors.request.use((request) => {
  const token = Cookies.get("_token");
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
    request.headers["Content-Type"] = "application/json";
  }
  return request;
});

export default api;
