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
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeTab: {
    borderTopWidth: 3,
    borderRadius: 10,
    paddingBottom: 3
  }
});
