import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/globalStyles";
import { LinearGradient } from "expo-linear-gradient";
type Props = {};

const ButtonComponent = ({ title, onPress ,navigation}: any) => {
  return (
    <Pressable onPress={onPress}>
      <LinearGradient
        colors={["#92A3FD", "#9DCEFF"]} // Start and end colors
        start={{ x: 0, y: 0.5 }} // Start at the left edge, centered vertically
        end={{ x: 1, y: 0.5 }}
        style={styles.btn}
      >
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  btn: {
    padding: 10,

    borderRadius: 40,
  },
  text: {
    color: "#fff",
    fontFamily: "Poppins-Bold",
    textAlign: "center",
    fontSize: 18,
  },
});
