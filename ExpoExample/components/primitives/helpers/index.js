import { Dimensions, Platform } from 'react-native';
import tinycolor from 'tinycolor2';

const window = Dimensions.get('window');
const screenWidth = Math.round(window.width);
const screenHeight = Math.round(window.height);

const Helpers = {
  screenWidth,
  screenHeight,
  tertiary: color => {
    tiny = tinycolor(color);
    if (tiny.isDark()) {
      tiny.darken(5);
      while (tiny.getBrightness() > 100) {
        tiny.darken(5);
      }
      return tiny.toHexString();
    }
    while (tiny.getLuminance() < 0.9) {
      tiny.lighten(1);
    }
    return tiny.toHexString();
  },
  isAndroid: Platform.OS === 'ios',
  isIphoneX: () =>
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (window.height === 812 || window.width === 812 || window.height === 896 || window.width === 896)
};

export default Helpers;
