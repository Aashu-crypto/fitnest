// TextInput.js
import { Colors } from "@/constants/globalStyles";
import React from "react";
import { View, TextInput as RNTextInput, Text, StyleSheet } from "react-native";

const TextInput = ({
  label,
  value,
  onChangeText,
  secureTextEntry,
  placeholder,
}: any) => {
  return (
    <View style={styles.container}>
      {/* {label && <Text style={styles.label}>{label}</Text>} */}
      <RNTextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={Colors.darkGreyColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: "#333",
  },
  input: {
    height: 50,
    backgroundColor: Colors.greyColor,

    borderRadius: 12,
    paddingLeft: 10,
  },
});

export default TextInput;
