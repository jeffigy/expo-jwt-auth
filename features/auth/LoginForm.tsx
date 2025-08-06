import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Link } from "expo-router";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Box className=" w-full  gap-5">
      <FormControl>
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
            onPress={() => setShowPassword(!showPassword)}
            className="mr-3"
          >
            <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
          </InputSlot>
        </Input>
      </FormControl>
      <Link href={"/(protected)/(tabs)"} asChild>
        <Button size="xl" className="w-full " onPress={() => {}}>
          <ButtonText>Login</ButtonText>
        </Button>
      </Link>

      <Button variant="link" onPress={() => {}}>
        <ButtonText>Register</ButtonText>
      </Button>
    </Box>
  );
};

export default LoginForm;
