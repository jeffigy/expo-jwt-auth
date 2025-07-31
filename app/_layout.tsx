import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import useStore from "../store";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export const queryClient = new QueryClient({});

export default function RootLayout() {
  const { loadAccessToken } = useStore();

  useEffect(() => {
    loadAccessToken();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* <SafeAreaView> */}
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="login" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(profile)" />
      </Stack>
      {/* </SafeAreaView> */}
    </QueryClientProvider>
  );
}
