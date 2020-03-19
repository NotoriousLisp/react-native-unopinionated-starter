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
    maxHeight: Helpers.screenHeight / 4,
    resizeMode: 'contain',
    marginBottom: -30,
    backgroundColor: 'transparent'
  },
  innerContainer: {
    marginHorizontal: 20,
    borderRadius: 10,
    width: '100%',
    maxWidth: 280,
    shadowOffset: { width: 3, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.6,
    shadowRadius: 6
  },
  scrollView: {
    marginTop: 50,
    zIndex: 10
  }
});
