import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

interface IBaseTextInput extends TextInputProps {
  title: string;
}

export default function BaseTextInput({
  style,
  title,
  ...rest
}: IBaseTextInput) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput style={[styles.input, style]} {...rest} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 16,
    padding: 10,
  },
  container: {
    width: "100%",
    paddingHorizontal: 10,
  },
  title: {
    padding: 5,
  },
});
