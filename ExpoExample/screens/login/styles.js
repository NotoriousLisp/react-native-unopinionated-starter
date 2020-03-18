import { StyleSheet } from 'react-native';
import { Helpers } from 'app/components/primitives';

export default StyleSheet.create({
  backgroundCircle: {
    position: 'absolute',
    height: Helpers.screenHeight * 2,
    width: Helpers.screenWidth * 3,
    top: Helpers.screenHeight / 2,
    right: -Helpers.screenWidth / 2,
    borderRadius: 600
  },
  logo: {
    marginVertical: 20,
    maxHeight: Helpers.screenHeight / 4,
    resizeMode: 'contain'
  },
  innerContainer: {
    marginHorizontal: 20,
    borderRadius: 10,
    minHeight: Helpers.screenHeight / 3,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 1.0,
    shadowRadius: 10
  }
});
