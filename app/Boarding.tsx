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
import Boarding from "../assets/images/boardingTwo.svg";
import { Colors, height, width } from "@/constants/globalStyles";
import { StatusBar } from "expo-status-bar";
type Props = {};
import { Link } from "expo-router";
const BoardingTwo = (props: Props) => {
  const handlePress = () => {};
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style={"light"} backgroundColor={Colors.brandColor} />

      <Boarding width={width} height={height / 1.7} />
      <View style={styles.lowerView}>
        <Text style={styles.textTitle}>Get Burn</Text>
        <Text style={styles.description}>
          Let’s keep burning, to achive yours goals, it hurts only temporarily,
          if you give up now you will be in pain forever
        </Text>
      </View>
      <Link href={"BoardingThree"} asChild>
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

export default BoardingTwo;

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
