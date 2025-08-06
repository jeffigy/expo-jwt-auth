import { API_URL } from "@/utils/env";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response) {
      error.message = error.response.data.message ?? error.message;
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
