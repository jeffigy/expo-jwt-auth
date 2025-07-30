import { useMutation } from "@tanstack/react-query";
import { login } from "../api/authApi";
import { AuthCredentials } from "../types/auth.type";
import { useRouter } from "expo-router";

export const useLoginMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: (credentials: AuthCredentials) => login(credentials),
    onError: (error, variables) => {
      console.log("error logging in", error, variables);
    },
    onSuccess: (data) => {
      console.log(data);
      router.replace("(dash)");
    },
  });
};
