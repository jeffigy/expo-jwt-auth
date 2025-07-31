import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { useLogoutMutation } from "../../hooks/useAuth";
import { Loader, LogOut } from "lucide-react-native";

const ProfileScreen = () => {
  const { mutateAsync: logout, isPending } = useLogoutMutation();

  return (
    <View
      style={{
        backgroundColor: "#f9f9f9",
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Link href="personal-information">Personal Information</Link>
      <Link href="grades">Grades</Link>
      <Link href="gale-library">Gale Library</Link>

      <Pressable onPress={() => logout()} disabled={isPending}>
        {isPending ? <Loader /> : <LogOut />}
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
