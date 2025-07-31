import React from "react";
import { Link, Tabs } from "expo-router";
import {
  Calendar,
  BookOpen,
  MessageCircle,
  Bell,
  Home,
  CircleUserRound,
} from "lucide-react-native";
import { DrawerToggleButton } from "@react-navigation/drawer";

const DashboardLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: "left",
        headerShadowVisible: false,
        headerTitleStyle: {
          fontSize: 30,
          fontWeight: "bold",
        },

        // tabBarActiveTintColor: "#135da0",
        tabBarInactiveTintColor: "#cad5e2",

        tabBarStyle: {
          backgroundColor: "#f9f9f9",
          elevation: 0,
          shadowOpacity: 0,
          borderTopWidth: 0,
        },

        headerStyle: {
          backgroundColor: "#f9f9f9",
          elevation: 0,
          shadowOpacity: 0,
        },
        headerRight: ({ tintColor }) => (
          <Link href={"(profile)"}>
            <CircleUserRound color={tintColor} />
          </Link>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <Home color={color} size={25} />,
          headerTitle: "HCCCI",
          tabBarLabel: "",
        }}
      />

      <Tabs.Screen
        name="tasks"
        options={{
          tabBarIcon: ({ color }) => <Calendar color={color} size={25} />,
          headerTitle: "Tasks",
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="subjects"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <BookOpen color={color} size={25} />,
          headerTitle: "Subjects",
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          tabBarIcon: ({ color }) => <MessageCircle color={color} size={25} />,
          headerTitle: "Messages",
          tabBarLabel: "",
        }}
      />

      <Tabs.Screen
        name="notifications"
        options={{
          tabBarIcon: ({ color }) => <Bell color={color} size={25} />,
          headerTitle: "Notifications",
          tabBarLabel: "",
        }}
      />
    </Tabs>
  );
};

export default DashboardLayout;
