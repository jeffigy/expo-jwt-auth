import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import useStore from "@/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

export const queryClient = new QueryClient({});

export default function RootLayout() {
  const { isAuthenticated } = useStore();

  console.log(isAuthenticated);
  return (
    <GluestackUIProvider mode="light">
      <QueryClientProvider client={queryClient}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Protected guard={!isAuthenticated}>
            <Stack.Screen name="index" />
          </Stack.Protected>
          <Stack.Protected guard={isAuthenticated}>
            <Stack.Screen name="(protected)" />
          </Stack.Protected>
        </Stack>
      </QueryClientProvider>
    </GluestackUIProvider>
  );
}
