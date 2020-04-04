import { StyleSheet } from 'react-native';
import { Helpers } from 'app/components/primitives';

export default StyleSheet.create({
  drawer: {
    paddingBottom: 20
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 10
  },
  profile: {
    paddingTop: Helpers.statusBarHeight,
    marginBottom: 10,
    padding: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  avatar: {
    height: 150,
    width: 150,
    marginBottom: 10,
    resizeMode: 'center',
    borderRadius: 75,
    zIndex: 10
  },
  backgroundCircle: {
    position: 'absolute',
    height: Helpers.screenHeight * 2,
    width: Helpers.screenWidth * 3,
    top: Helpers.screenHeight * 0.75,
    right: -Helpers.screenWidth * 0.1,
    borderRadius: 600,
    zIndex: 1
  },
  tinyCircle: {
    position: 'absolute',
    height: 200,
    width: 100,
    top: -100,
    right: 200,
    borderRadius: 200,
    zIndex: 1
  }
});
