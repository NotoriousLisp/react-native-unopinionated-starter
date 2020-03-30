import { StyleSheet } from 'react-native';
import { Helpers } from 'app/components/primitives';

export default StyleSheet.create({
  drawer: {
    paddingTop: Helpers.statusBarHeight,
    paddingBottom: 20
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 10
  }
});
