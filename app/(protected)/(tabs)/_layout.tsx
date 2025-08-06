import { Link, Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerRight: () => <Link href="/profile">Profile</Link>,
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
