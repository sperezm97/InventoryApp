import { Dimensions, Platform, PixelRatio } from 'react-native';
import { colors } from './colors';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;

// Ios Devices
// - Portrait
const iPhone6Portrait = deviceHeight == 750 && deviceWidth == 1334;
const iPhone7Portrait = iPhone6Portrait;
const iPhone8Portrait = iPhone7Portrait;
const iPhone6PlusPortrait = deviceHeight == 1242 && deviceWidth == 2208;
const iPhone7PlusPortrait = iPhone6PlusPortrait;
const iPhone8PlusPortrait = iPhone7PlusPortrait;
const iPhoneXPortrait = deviceHeight == 1125 && deviceWidth == 2436;
const iPhoneXsPortrait = iPhoneXPortrait;
const iPhoneXrPortrait = deviceHeight == 828 && deviceWidth == 1792;
const iPhoneXsMaxPortrait = deviceHeight == 1242 && deviceWidth == 2688;

// - Landscape
const iPhone6Landscape = deviceHeight == 1334 && deviceWidth == 750;
const iPhone7Landscape = iPhone6Landscape;
const iPhone8Landscape = iPhone7Landscape;
const iPhone6PlusLandscape = deviceHeight == 2208 && deviceWidth == 1242;
const iPhone7PlusLandscape = iPhone6PlusLandscape;
const iPhone8PlusLandscape = iPhone7PlusLandscape;
const iPhoneXLandscape = deviceHeight == 2436 && deviceWidth == 1125;
const iPhoneXsLandscape = iPhoneXLandscape;
const IPhoneXrLandscape = deviceHeight == 1792 && deviceWidth == 828;
const iPhoneXsMaxLandscape = deviceHeight == 2688 && deviceWidth == 1242;


// Font sizes in andrid used sp and IOS used px. Are the same value.

// Height x with same number, dont size apply too in IOS
const iconSizes = {
  maxSize: 35,
  normalSize: 30,
  smallSize: 27,
  minNavigationBar: 24,
  maxNavigationBar: 28,
  minTabBar: 18,
  maxTabBar: 25

};
// Android Font Sizes
const IconSizesAndroid = {
  normalIcons: 24,
  // inputs buttons
  inputIcons: 20,

};

const globalStyle = {
  globalContainer: {
    flex: 1,
    backgroundColor: colors.lightGrey
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,

  },
  // Title bar styles for Screen
  iconSizeNav: {
    fontSize: iconSizes.minNavigationBar,
    color: colors.black
  }
};


export { iconSizes, IconSizesAndroid, globalStyle };
