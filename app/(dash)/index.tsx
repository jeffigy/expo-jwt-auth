import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { useTheatersQuery } from "../../hooks/useTheaters";

const DashScreen = () => {
  const {
    data: theaters,
    isLoading,
    isError,
    error,
    isFetching,
  } = useTheatersQuery();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>{(error.stack, error.name)}</Text>;
  }

  return (
    <View>
      {isFetching && <ActivityIndicator color="black" />}
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
