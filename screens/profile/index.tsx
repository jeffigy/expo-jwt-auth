import { Button, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";

const ProfileScreen = () => {
  return (
    <Center className="flex-1">
      <Button variant="outline" className="" onPress={() => {}}>
        <ButtonText>Logout</ButtonText>
      </Button>
    </Center>
  );
};

export default ProfileScreen;
