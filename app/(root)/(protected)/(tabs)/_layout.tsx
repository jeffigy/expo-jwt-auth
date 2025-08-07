import useStore from "@/store";
import { Link, Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  const { authUser } = useStore();
  return (
    <Tabs
      screenOptions={{
        headerRight: () => <Link href="/profile">{authUser?.name}</Link>,
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="calendar" />
      <Tabs.Screen name="subjects" />
      <Tabs.Screen name="messages" />
      <Tabs.Screen name="notifications" />
    </Tabs>
  );
};

export default TabsLayout;
