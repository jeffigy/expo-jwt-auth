import { refresh } from "@/api/refreshToken";
import { AuthCredentials } from "@/types/auth.type";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { login, logout } from "../api/authApi";
import useStore from "../store";

export const useLoginMutation = () => {
  const router = useRouter();
  const { setCredentials } = useStore.getState();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: (credentials: AuthCredentials) => login({ credentials }),

    onSuccess: async (data) => {
      await setCredentials(data.token);
      router.replace("/(root)/(protected)/(tabs)");
    },
  });
};

export const useLogoutMutation = () => {
  const { clearCredentials } = useStore.getState();
  const router = useRouter();

  return useMutation({
    mutationKey: ["logout"],
    mutationFn: () => logout(),
    onSuccess: async () => {
      await clearCredentials();
      router.replace("/(root)");
    },
  });
};

export const useRefreshMutation = () => {
  return useMutation({
    mutationFn: () => refresh(),
    mutationKey: ["refresh"],
    //* The code below is not applicable here below if followed,
    //*  the race condition won't be meet and the login screen
    //* will render for a milliseconds or so before redirecting to the tabs route
    // onSuccess: async (data) => {
    // await setCredentials(data.token);
    // },
  });
};
