import { View, Text } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { LogOut } from "lucide-react-native";

const DashboardLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerRight: ({ tintColor }) => (
            <Link href={"index"}>
              <LogOut color={tintColor} size={24} />
            </Link>
          ),
          title: "Dashboard",
        }}
      />
    </Stack>
  );
};

export default DashboardLayout;
