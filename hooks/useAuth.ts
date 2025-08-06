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

    onSuccess: (data) => {
      setCredentials(data.token);
      //   router.replace("/(protected)/(tabs)");
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
      // router.replace("/");
    },
  });
};
