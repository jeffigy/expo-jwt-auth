import subjects from "../../assets/data.json";
import { Link } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native"; // ✅ use Pressable

const SubjectsScreen = () => {
  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: "#f9f9f9" }}>
      <FlatList
        data={subjects}
        keyExtractor={(item) => item.id} // ✅ always include keyExtractor
        renderItem={({ item }) => (
          <Link
            href={{
              pathname: "/subjects/[id]", // ✅ string literal — not backticks
              params: { id: item.id },
            }}
            asChild
          >
            <Pressable
              style={{
                padding: 15,
                backgroundColor: "#fff",
                marginBottom: 10,
                borderRadius: 10,
                elevation: 2,
                gap: 10,
              }}
            >
              <View>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  {item.name}
                </Text>
                <Text style={{ fontSize: 12, fontWeight: "300" }}>
                  {item.teacher}
                </Text>
              </View>
              <Text style={{ fontSize: 16 }}>{item.room}</Text>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
};

export default SubjectsScreen;
