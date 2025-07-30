import { View, Text, FlatList } from "react-native";
import React from "react";
import { useTheatersQuery } from "../../hooks/useTheaters";

const DashScreen = () => {
  const { data: theaters, isLoading, isError } = useTheatersQuery();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error</Text>;
  }

  return (
    <View>
      <FlatList
        data={theaters}
        renderItem={({ item }) => (
          <Text key={item.theater_id}>{item.name}</Text>
        )}
      />
    </View>
  );
};

export default DashScreen;
