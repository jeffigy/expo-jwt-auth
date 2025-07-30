import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { LogOut } from "lucide-react-native";
import { useLogoutMutation } from "../../hooks/useAuth";

const DashboardLayout = () => {
  const { mutateAsync: logout } = useLogoutMutation();
  return (
    <Stack screenOptions={{ headerTitleAlign: "left" }}>
      <Stack.Screen
        name="index"
        options={{
          headerRight: ({ tintColor }) => (
            <Pressable onPress={() => logout()}>
              <LogOut color={tintColor} size={24} />
            </Pressable>
          ),
          title: "Dashboard",
        }}
      />
    </Stack>
  );
};

export default DashboardLayout;
