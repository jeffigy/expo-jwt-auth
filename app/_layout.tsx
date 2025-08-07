import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

export const queryClient = new QueryClient({});

const AppLayout = () => {
  return (
    <GluestackUIProvider mode="light">
      <QueryClientProvider client={queryClient}>
        <Stack>
          <Stack.Screen name="(root)" options={{ headerShown: false }} />
        </Stack>
      </QueryClientProvider>
    </GluestackUIProvider>
  );
};

export default AppLayout;
