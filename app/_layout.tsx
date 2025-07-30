import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import useStore from "../store";
import { useEffect } from "react";
export const queryClient = new QueryClient({});

export default function RootLayout() {
  const { loadAccessToken } = useStore();

  useEffect(() => {
    loadAccessToken();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="(dash)" />
      </Stack>
    </QueryClientProvider>
  );
}
