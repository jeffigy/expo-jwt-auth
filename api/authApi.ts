import axiosInstance from ".";
import { API_URL } from "../config/env.config";
import { AuthCredentials } from "../types/auth.type";

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<{ token: string }> => {
  return (
    await axiosInstance.post(`${API_URL}/api/pub/auth/login`, {
      email,
      password,
    })
  ).data;
};
