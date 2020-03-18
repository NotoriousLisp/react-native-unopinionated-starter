import { Dimensions, Platform } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const Helpers = {
  screenWidth,
  screenHeight,
  isAndroid: Platform.OS === 'ios'
};

export default Helpers;
