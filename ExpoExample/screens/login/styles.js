import { StyleSheet } from 'react-native';
import { Helpers } from 'app/components/primitives';

const LOGO_HEIGHT = Helpers.screenHeight / 4;

export default StyleSheet.create({
  backgroundCircle: {
    position: 'absolute',
    height: Helpers.screenHeight * 2,
    width: Helpers.screenWidth * 3,
    top: Helpers.screenHeight * 0.75,
    right: -Helpers.screenWidth / 2,
    borderRadius: 600
  },
  tinyCircle: {
    position: 'absolute',
    height: 200,
    width: 200,
    top: -50,
    right: -100,
    borderRadius: 200
  },
  logo: {
    marginTop: 50,
    height: LOGO_HEIGHT - 50,
    marginBottom: -LOGO_HEIGHT,
    resizeMode: 'contain',
    backgroundColor: 'transparent'
  },
  innerContainer: {
    padding: 10,
    marginTop: LOGO_HEIGHT + 20,
    marginHorizontal: 20,
    borderRadius: 10,
    width: '100%',
    maxWidth: 280,
    shadowOffset: { width: 1, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.6,
    shadowRadius: 3
  },
  scrollView: {
    zIndex: 10
  }
});
