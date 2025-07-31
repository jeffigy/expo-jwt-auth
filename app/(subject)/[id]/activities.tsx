import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const ActivitiesScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>ActivitiesScreen {id}</Text>
    </View>
  );
};

export default ActivitiesScreen;
