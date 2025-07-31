import { View, Text, Button, Platform, Pressable } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";

const ProfileLayout = () => {
  const router = useRouter();
  Platform;
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,

        headerStyle: {
          backgroundColor: "#f9f9f9",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Profile",
        }}
      />
      <Stack.Screen
        name="personal-information"
        options={{
          headerTitle: "Personal Information",
        }}
      />
      <Stack.Screen
        name="grades"
        options={{
          headerTitle: "Grades",
        }}
      />
      <Stack.Screen
        name="gale-library"
        options={{
          headerTitle: "Gale Library",
        }}
      />
    </Stack>
  );
};

export default ProfileLayout;
