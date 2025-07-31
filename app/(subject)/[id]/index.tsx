import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const SubjectDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>SubjectDetailsScreen {id}</Text>
    </View>
  );
};

export default SubjectDetailsScreen;
