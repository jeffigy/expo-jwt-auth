import { Center } from "@/components/ui/center";
import "@/global.css";
import { useRefreshMutation } from "@/hooks/useAuth";
import useStore from "@/store";
import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

export default function RootLayout() {
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const { isAuthenticated, token, setCredentials } = useStore();
  const { mutateAsync: refresh, isPending } = useRefreshMutation();
  const router = useRouter();

  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      console.log("verifying refresh token");
      try {
        const data = await refresh();
        await setCredentials(data.token);
      } catch (err) {
        router.push("/(root)");
      } finally {
        if (isMounted) setIsCheckingAuth(false); // Allow rendering to continue
      }
    };

    if (!token) {
      verifyRefreshToken();
    } else {
      setIsCheckingAuth(false);
    }

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
