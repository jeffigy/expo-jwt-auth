import { Center } from "@/components/ui/center";
import LogoutButton from "@/features/auth/LogoutButton";
import useStore from "@/store";
import { Text } from "react-native";

const ProfileScreen = () => {
  const { authUser } = useStore();
  return (
    <Center className="flex-1">
      <Text>{authUser?.name}</Text>
      <LogoutButton />
    </Center>
  );
};

export default ProfileScreen;
