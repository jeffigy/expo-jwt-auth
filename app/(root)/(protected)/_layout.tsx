import { Stack } from "expo-router";
import React from "react";

const ProtectedLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="profile" />
    </Stack>
  );
};

export default ProtectedLayout;
