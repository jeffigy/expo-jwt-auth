import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Link } from "expo-router";
import { CircleUserRound } from "lucide-react-native";

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView>
      <Drawer
        screenOptions={{
          headerTitleAlign: "left",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: "bold",
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
        <Drawer.Screen
          name="index"
          options={{
            headerLeft: () => <DrawerToggleButton />,
            headerTitle: "Subjects",
            drawerLabel: "Subjects",
          }}
        />

        <Drawer.Screen
          name="coil-program"
          options={{
            headerLeft: () => <DrawerToggleButton />,
            headerTitle: "COIL Program",
            drawerLabel: "COIL Program",
          }}
        />

        <Drawer.Screen
          name="hali-program"
          options={{
            headerLeft: () => <DrawerToggleButton />,
            headerTitle: "HALI Program",
            drawerLabel: "HALI Program",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;
