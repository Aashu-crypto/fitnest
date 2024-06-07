/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Dimensions } from "react-native";

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";
export const { width, height } = Dimensions.get("window");
export const Colors = {
  brandColor: "#92A3FD",
  secondaryColor: "#C58BF2",
  blackColor: "#1D1617",
  darkGreyColor: "#7B6F72",
  semiDarkGreyColor: "#ADA4A5",
  greyColor: "#DDDADA",
  borderColor: "#F7F8F8",
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};
