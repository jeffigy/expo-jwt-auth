import { useTheatersQuery } from "@/hooks/useTheaters";
import React from "react";
import { ActivityIndicator, FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TheatersList = () => {
  const {
    data: theaters,
    isFetching,
    isLoading,
    isError,
    error,
  } = useTheatersQuery();

  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>{error.message}</Text>;
  return (
    <SafeAreaView className="flex-1">
      {isFetching && <ActivityIndicator color={"black"} />}
      <FlatList
        data={theaters}
        renderItem={({ item }) => (
          <Text key={item.theater_id}>{item.name}</Text>
        )}
      />
    </SafeAreaView>
  );
};

export default TheatersList;
