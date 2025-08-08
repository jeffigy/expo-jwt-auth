import axiosInstance from ".";
import { API_URL } from "../utils/env";

export const getTheaters = async () => {
  return (await axiosInstance.get(`${API_URL}/api/pvt/theaters`)).data;
};
