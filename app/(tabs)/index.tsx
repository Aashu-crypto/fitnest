import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { appId, appKey } from "@/constants/config";

type Props = {};

const index = (props: Props) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await fetch(
          `https://trackapi.nutritionix.com/v2/search/instant?query=${query}`,
          {
            method: "GET",
            headers: {
              "x-app-id": appId,
              "x-app-key": appKey,
            },
          }
        );
        const data = await response.json();
        setResults(data.common);
      } catch (error) {
        console.error(error);
      }
    };
  }, []);
  return (
    <View style={{ padding: 20 }}>
      <Text style={styles.name}>Enter Your meals</Text>
      
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
