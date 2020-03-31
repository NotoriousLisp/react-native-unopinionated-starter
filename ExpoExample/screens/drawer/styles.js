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
    borderWidth: 3,
  }
});
