import { StyleSheet } from 'react-native';
import { Helpers } from 'app/components/primitives';

export default StyleSheet.create({
  innerContainer: {
    width: Helpers.screenWidth - 100,
    height: Helpers.screenWidth - 100,
    borderWidth: 1,
    borderRadius: Helpers.screenWidth
  }
});
