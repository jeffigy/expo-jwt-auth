import { Alert, AlertIcon, AlertText } from "@/components/ui/alert";
import { Box } from "@/components/ui/box";
import { Button, ButtonSpinner, ButtonText } from "@/components/ui/button";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { useLoginMutation } from "@/hooks/useAuth";
import { CircleX, EyeIcon, EyeOffIcon } from "lucide-react-native";
import { useState } from "react";

const LoginForm = () => {
  const { isPending, mutateAsync: login, error, isError } = useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const handleLogin = async () => {
    await login({ email, password });
  };

  return (
    <Box className=" w-full  gap-5">
      {isError && (
        <Alert action="error" variant="solid">
          <AlertIcon as={CircleX} />
          <AlertText>{error?.message}</AlertText>
        </Alert>
      )}
      <FormControl className="px">
        <FormControlLabel>
          <FormControlLabelText>Email</FormControlLabelText>
        </FormControlLabel>
        <Input size="xl">
          <InputField
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </Input>
      </FormControl>

      <FormControl>
        <FormControlLabel>
          <FormControlLabelText>Password</FormControlLabelText>
        </FormControlLabel>
        <Input size="xl">
          <InputField
            value={password}
            onChangeText={setPassword}
            secureTextEntry={showPassword}
          />
          <InputSlot
            className="px-5"
            onPress={() => setShowPassword(!showPassword)}
          >
            <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
          </InputSlot>
        </Input>
      </FormControl>
      <Button
        isDisabled={isPending}
        size="xl"
        className="w-full "
        onPress={handleLogin}
      >
        {isPending && <ButtonSpinner />}
        <ButtonText>Login</ButtonText>
      </Button>
    </Box>
  );
};

export default LoginForm;
