import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Full from "@/assets/images/fullBodyWorkOut.svg";
import Lower from "@/assets/images/lowerBodyWorkOut.svg";
import Ab from "@/assets/images/absWorkout.svg";
import { Colors, height, width } from "@/constants/globalStyles";
type Props = {};

const obj = [
  { name: "Full Body Workout", svg: Full, subText: "11 exercise | 32 mins" },
  { name: "Lower Body Workout", svg: Lower, subText: "12 exercise | 40 mins" },
  { name: "AB Workout", svg: Ab, subText: "11 exercise | 32 mins" },
];
const renderItem = ({ item }:any) => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#9DCEFF",
        marginVertical: 10,
        borderRadius: 15,
        padding: 15,
        justifyContent: "space-around",
        height: height / 5,
      }}
    >
      <View style={{ justifyContent: "space-around" }}>
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.subText}>{item.subText}</Text>
        </View>

        <Pressable
          style={{
            padding: 5,
            backgroundColor: "#fff",
            borderRadius: 25,
            justifyContent: "center",
            alignItems: "center",
            maxWidth: 100,
            height: 35,
          }}
        >
          <Text style={{ color: "#9DCEFF" }}>View More</Text>
        </Pressable>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <item.svg width={100} height={100} />
      </View>
    </View>
  );
};
const index = (props: Props) => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={styles.name}>What Do You Want to Train?</Text>
      <FlatList data={obj} renderItem={renderItem} />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  name: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
  },
  subText: {
    color: "#fff",
    fontFamily: "Poppins-Regular",
  },
});
