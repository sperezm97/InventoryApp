import { Dimensions, Platform, PixelRatio } from "react-native";
// Responsive Const
export const deviceHeight = Dimensions.get("window").height;
export const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;
const platformStyle = undefined;

export const pmHelpers = {
  extraSmall: platform === "ios" ? 6 : 8,
  small: platform === "ios" ? 14 : 16,
  normal: platform === "ios" ? 16 : 18,
  regular: platform === "ios" ? 18 : 20,
  large: platform === "ios" ? 20 : 24,
  extraLarge: platform === "ios" ? 24 : 28,
  extra2Large: platform === "ios" ? 30 : 32,
};
