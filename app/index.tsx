import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card className="p-20">
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </Card>
    </View>
  );
}
