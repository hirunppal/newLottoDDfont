import axios from "axios";
import { getAccessToken } from "../services/localStorage";

export const API_ENDPOINT_URL = "http://localhost:8009";

axios.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  (err) => Promise.reject(err)
);
