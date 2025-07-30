import axiosInstance from ".";
import { API_URL } from "../config/env.config";

export const getTheaters = async () => {
  return (await axiosInstance.get(`${API_URL}/api/pvt/theaters`)).data;
};
