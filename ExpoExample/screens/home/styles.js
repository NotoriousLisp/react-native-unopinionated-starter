import { StyleSheet } from 'react-native';
import { Helpers } from 'app/components/primitives';

export default StyleSheet.create({
  tabBarContainer: {
    height: Helpers.isIphoneX ? 90 : 70,
    paddingBottom: Helpers.isIphoneX ? 20 : 0,
    alignItems: 'stretch'
  },
  tab: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeTab: {
    borderBottomWidth: 3,
    paddingTop: 3
  }
});
