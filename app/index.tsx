import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { useLoginMutation } from "../hooks/useAuth";

const LoginScreen = () => {
  const { mutateAsync: login, isPending } = useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <Pressable
        onPress={async () => await login({ email, password })}
        disabled={!email || !password || isPending}
        style={styles.button}
      >
        {isPending && <ActivityIndicator color={"white"} />}

        <Text style={{ color: "white" }}>Log In</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    gap: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#135DA0",
    padding: 10,
    borderRadius: 5,
  },
});
