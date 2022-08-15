import { User, emptyUser, UserKeys } from "api/models/User";
import authRepository from "api/repository/authRepository";
import userRepository from "api/repository/userRepository";
import BaseButton from "components/BaseButton";
import BaseTextInput from "components/BaseTextInput";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const [user, setUser] = useState<User>(emptyUser);

  const [password, setPassword] = useState<string>("");

  const onChangeName = (text: string, field: UserKeys) => {
    setUser((prevState) => ({ ...prevState, [field]: text }));
  };

  const onSaveUser = async () => {
    const userCredentials = await authRepository.signUpUser(
      user.email,
      password
    );
    if (userCredentials) {
      await userRepository.createUser(userCredentials.uid, user);
    }
  };

  return (
    <View style={styles.container}>
      <BaseTextInput
        title="Email"
        onChangeText={(text) => onChangeName(text, "email")}
      />
      <BaseTextInput
        autoCorrect={false}
        autoCapitalize={"none"}
        title="Password"
        onChangeText={(text) => setPassword(text)}
      />
      <BaseTextInput
        title="First Name"
        onChangeText={(text) => onChangeName(text, "firstName")}
      />
      <BaseTextInput
        title="Last Name"
        onChangeText={(text) => onChangeName(text, "lastName")}
      />
      <BaseTextInput
        maxLength={10}
        title="Cellphone"
        onChangeText={(text) => onChangeName(text, "contact")}
      />
      <BaseTextInput
        maxLength={10}
        title="Emergency Contact"
        onChangeText={(text) => onChangeName(text, "emergencyContact")}
      />

      <BaseButton title="Create user" onPress={onSaveUser} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
