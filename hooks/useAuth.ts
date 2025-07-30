import { useMutation } from "@tanstack/react-query";
import { login, logout } from "../api/authApi";
import { AuthCredentials } from "../types/auth.type";
import { useRouter } from "expo-router";
import useStore from "../store";

export const useLoginMutation = () => {
  const router = useRouter();
  const { setCredentials } = useStore.getState();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: (credentials: AuthCredentials) => login(credentials),
    onError: (error, variables) => {
      console.log("error logging in", error, variables);
    },
    onSuccess: (data) => {
      setCredentials(data.token);
      router.replace("(dash)");
    },
  });
};

export const useLogoutMutation = () => {
  const { clearCredentials } = useStore.getState();
  const router = useRouter();

  return useMutation({
    mutationKey: ["logout"],
    mutationFn: () => logout(),
    onSuccess: () => {
      clearCredentials();
      router.replace("/login");
    },
  });
};
