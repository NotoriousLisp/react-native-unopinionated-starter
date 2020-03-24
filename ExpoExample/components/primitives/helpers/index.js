import { Dimensions, Platform } from 'react-native';
import tinycolor from 'tinycolor2';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

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
      tiny.lighten(2);
    }
    return tiny.toHexString();
  },
  isAndroid: Platform.OS === 'ios'
};

export default Helpers;
