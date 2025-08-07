import useStore from "@/store";
import { API_URL } from "@/utils/env";
import { getAccessToken } from "@/utils/secureStore";
import axios from "axios";
import { useRouter } from "expo-router";
import { refresh } from "./refreshToken";

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(async (config) => {
  const token = await getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const { setCredentials, clearCredentials } = useStore.getState();
    const router = useRouter();

    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retury = true;
      try {
        const { token } = await refresh();
        console.log({ token });
        setCredentials(token);
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return axiosInstance(originalRequest);
      } catch (error) {
        console.log("Session Expired");
        clearCredentials();
        router.replace("/");
        return Promise.reject(error);
      }
    }

    if (error.response) {
      error.message = error.response.data.message ?? error.message;
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
