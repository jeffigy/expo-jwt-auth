import { StyleSheet } from "react-native";
import React from "react";
import { Tabs, useLocalSearchParams, withLayoutContext } from "expo-router";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  ClipboardList,
  Info,
  MessageSquare,
  MessagesSquare,
  UsersRound,
} from "lucide-react-native";

const { Navigator } = createMaterialTopTabNavigator();
export const MaterialTopTabs = withLayoutContext(Navigator);

const SubjectsLayout = () => {
  const { id } = useLocalSearchParams();
  return (
    <Tabs
      screenOptions={{
        headerTitle: `Subject ${id}`,
        headerTitleAlign: "left",
        headerStyle: {
          backgroundColor: "#f9f9f9",
          elevation: 0,
          shadowOpacity: 0,
        },
        headerRight: ({ tintColor }) => <Info color={tintColor} />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Stream",
          tabBarIcon: ({ color }) => <MessagesSquare color={color} size={25} />,
        }}
      />
      <Tabs.Screen
        name="activities"
        options={{
          tabBarLabel: "Activities",
          tabBarIcon: ({ color }) => <ClipboardList color={color} size={25} />,
        }}
      />
      <Tabs.Screen
        name="students"
        options={{
          tabBarLabel: "Students",
          tabBarIcon: ({ color }) => <UsersRound color={color} size={25} />,
        }}
      />
    </Tabs>
  );
};

export default SubjectsLayout;

const styles = StyleSheet.create({});
