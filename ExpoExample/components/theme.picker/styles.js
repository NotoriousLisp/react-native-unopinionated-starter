import { StyleSheet } from 'react-native';
import { Helpers } from 'app/components/primitives';

export default StyleSheet.create({
  swatch: {
    height: 20,
    width: 10,
    borderRadius: 2,
    margin: 1
  },
  scrollView: {
    flex: 0,
    marginVertical: 10
  },
  themeItem: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: 'white',
    marginHorizontal: 5,
    padding: 5
  },
  selected: {
    borderWidth: 3
  }
});
