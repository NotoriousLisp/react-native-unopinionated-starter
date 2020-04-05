import { StyleSheet } from 'react-native';

const BORDER_RADIUS = 30;

export default StyleSheet.create({
  container: {
    borderTopRightRadius: BORDER_RADIUS,
    borderTopLeftRadius: BORDER_RADIUS,
    paddingHorizontal: 10,
    paddingTop: 10,
    borderWidth: 1,
    borderBottomWidth: 0,
  },
  input: {
    width: 200,
    marginHorizontal: 10,
    marginVertical: 15,
    alignSelf: 'center',
  },
});
