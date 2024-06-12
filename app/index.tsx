import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Animated,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Svg, { Path } from "react-native-svg";
import { Colors, height, width } from "@/constants/globalStyles";
import { StatusBar } from "expo-status-bar";
import { SvgXml } from "react-native-svg";
import BoardingOne from "../assets/images/boardingOne.svg"; // Adjust the import as per your SVG files
import BoardingTwo from "../assets/images/boardingTwo.svg";
import BoardingThree from "../assets/images/boardingThree.svg";
import { Link } from "expo-router";
import Paginator from "@/components/Paginator";
import { useRouter } from "expo-router";

const index = () => {
  const handlePress = () => {};
  const slidesRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const obj = [
    {
      title: "Track Your Goals",
      description:
        "Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals",
      svg: BoardingOne,
    },
    {
      title: "Get Burn",
      description:
        "Let’s keep burning, to achieve your goals, it hurts only temporarily if you give up now you will be in pain forever",
      svg: BoardingTwo,
    },
    {
      title: "Eat Well",
      description:
        "Let's start a healthy lifestyle with us, we can determine your diet every day. healthy eating is fun",
      svg: BoardingThree,
    },
  ];
  const scrollX = useRef(new Animated.Value(0)).current;
  console.log("x", scrollX);

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    console.log(viewableItems);

    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const renderItem = ({ item }: any) => {
    return (
      <View style={{ flex: 1 }}>
        <item.svg width={width} height={height / 1.7} />
        <View style={styles.lowerView}>
          <Text style={styles.textTitle}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    );
  };
  useEffect(() => {
    console.log(scrollX);
  }, [scrollX]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style={"light"} backgroundColor={Colors.brandColor} />
      <FlatList
        data={obj}
        horizontal
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        decelerationRate="fast"
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
      />

      <Paginator data={obj} scrollX={scrollX} />
      {currentIndex == 2 && (
        <TouchableOpacity
          style={styles.nextBtn}
          onPress={() => router.replace("/SignUp")}
        >
          <Image
            source={require("@/assets/images/Button.png")}
            style={{ height: 60, width: 60 }}
          />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  lowerView: {
    padding: 10,
    margin: 20,
    marginTop: 30,
  },
  nextBtn: {
    position: "absolute",
    bottom: 20,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textTitle: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
  },
  description: {
    fontFamily: "Poppins-Regular",
    maxWidth: width * 0.8,
  },
});
