import {
  View,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TouchableHighlight,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { width } from "@/constants/globalStyles";
import TextInput from "@/components/TextInput";
import ButtonComponent from "@/components/ButtonComponent";
import { useRouter } from "expo-router";

type Props = {};

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleRegister = () => {
    // Handle registration logic here
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
    router.replace("(tabs)");
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View>
          <Text style={styles.header}>Hey there,</Text>
          <Text style={styles.subHeader}>Create an Account</Text>
          <TextInput
            label="First Name"
            value={firstName}
            onChangeText={setFirstName}
            placeholder="First Name"
          />
          <TextInput
            label="Last Name"
            value={lastName}
            onChangeText={setLastName}
            placeholder="Last Name"
          />
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="Password"
          />
          <ButtonComponent title="Register" onPress={handleRegister} />

          <View style={styles.orContainer}>
            <Text>Or</Text>
          </View>
          <View style={styles.socialButtons}>
            <Button title="Google" onPress={() => {}} color="#4285F4" />
            <Button title="Facebook" onPress={() => {}} color="#3b5998" />
          </View>
          <View style={styles.loginContainer}>
            <Text>Already have an account? </Text>
            <TouchableOpacity>
              <Text style={styles.link}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  textTitle: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
  },
  description: {
    fontFamily: "Poppins-Regular",
    maxWidth: width * 0.8,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
  },
  subHeader: {
    fontSize: 20,
    marginBottom: 20,
    alignSelf: "center",
  },
  termsContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  link: {
    color: "#6200EE",
    textDecorationLine: "underline",
  },
  orContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
