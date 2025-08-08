import { Center } from "@/components/ui/center";
import "@/global.css";
import { useRefreshMutation } from "@/hooks/useAuth";
import useStore from "@/store";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

export default function RootLayout() {
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  // reactive state values
  const { isAuthenticated } = useStore();

  //  non-reactive actions
  const { setCredentials, loadAccessToken } = useStore.getState();

  const { mutateAsync: refresh, isPending } = useRefreshMutation();

  useEffect(() => {
    let isMounted = true;

    const bootstrapAuth = async () => {
      console.log("⏳ Bootstrapping auth...");

      await loadAccessToken(); // sets token into store
      const token = useStore.getState().token; // ✅ get latest token after load

      if (!token) {
        try {
          const data = await refresh();
          await setCredentials(data.token);
          console.log(" Refreshed token and set credentials");
        } catch (err) {
          console.log(" Refresh token failed", err);
        } finally {
          if (isMounted) setIsCheckingAuth(false);
        }
      } else {
        if (isMounted) setIsCheckingAuth(false);
      }
    };

    bootstrapAuth();

    return () => {
      isMounted = false;
    };
  }, []);

  if (isCheckingAuth || isPending) {
    return (
      <Center className="flex-1">
        <ActivityIndicator />
      </Center>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false, animation: "none" }}>
      <Stack.Protected guard={!isAuthenticated}>
        <Stack.Screen name="index" />
      </Stack.Protected>
      <Stack.Protected guard={isAuthenticated}>
        <Stack.Screen name="(protected)" />
      </Stack.Protected>
    </Stack>
  );
}
