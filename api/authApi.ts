import { AuthCredentials } from "@/types/auth.type";
import { API_URL } from "@/utils/env";
import axiosInstance from ".";

export const login = async ({
  credentials,
}: {
  credentials: AuthCredentials;
}): Promise<{ token: string }> => {
  return (
    await axiosInstance.post(`${API_URL}/api/pub/auth/login`, credentials)
  ).data;
};

export const logout = async () => {
  return (await axiosInstance.post(`${API_URL}/api/pub/auth/logout`)).data;
};
