import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";
import Boarding from "../assets/images/boardingThree.svg";
import { Colors, height, width } from "@/constants/globalStyles";
import { StatusBar } from "expo-status-bar";
type Props = {};
import { Link } from "expo-router";
const BoardingThree = (props: Props) => {
  const handlePress = () => {};
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style={"light"} backgroundColor={Colors.brandColor} />

      <Boarding width={"100%"} height={height / 1.7} />
      <View style={styles.lowerView}>
        <Text style={styles.textTitle}>Eat Well</Text>
        <Text style={styles.description}>
          Let's start a healthy lifestyle with us, we can determine your diet
          every day. healthy eating is fun
        </Text>
      </View>
      <Link href={""} asChild>
        <TouchableOpacity style={styles.nextBtn}>
          <Image
            source={require("@/assets/images/Button.png")}
            style={{ height: 60, width: 60 }}
          />
        </TouchableOpacity>
      </Link>
    </SafeAreaView>
  );
};

export default BoardingThree;

const styles = StyleSheet.create({
  lowerView: {
    padding: 10,
    margin: 20,
    marginTop: 30,
  },
  nextBtn: {
    flex: 1,

    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20,
  },
  textTitle: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
  },
  description: {
    fontFamily: "Poppins-Regular",
  },
});
