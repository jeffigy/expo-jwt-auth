import {
  Button,
  ButtonIcon,
  ButtonSpinner,
  ButtonText,
} from "@/components/ui/button";
import { useLogoutMutation } from "@/hooks/useAuth";
import { LogOut } from "lucide-react-native";

const LogoutButton = () => {
  const { mutateAsync: logout, isPending } = useLogoutMutation();

  return (
    <Button
      isDisabled={isPending}
      variant="outline"
      className=""
      onPress={() => logout()}
    >
      {isPending ? <ButtonSpinner /> : <ButtonIcon as={LogOut} />}
      <ButtonText>Logout</ButtonText>
    </Button>
  );
};

export default LogoutButton;
