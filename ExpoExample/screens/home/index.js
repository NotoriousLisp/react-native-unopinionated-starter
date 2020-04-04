import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import tinycolor from 'tinycolor2';
import { values } from 'lodash';
import { Flex, Text, Icon, ICON_TYPES } from 'app/components/primitives';
import { useThemeContext } from 'app/state/theme.state';
import { Helpers } from 'app/components/primitives';
import { TabOne, TabTwo, TabThree, TabFour } from 'app/screens/tabs';
import styles from './styles';

const TABS = {
  one: { key: 'one', label: 'Tab One', icon: { name: 'home' }, Component: TabOne },
  two: { key: 'two', label: 'Tab Two', icon: { name: 'heart' }, Component: TabTwo },
  three: { key: 'three', label: 'Tab Three', icon: { name: 'image' }, Component: TabThree },
  four: { key: 'four', label: 'Tab Four', icon: { name: 'github' }, Component: TabFour },
};

export default function HomeScreen({ navigation }) {
  const [theme] = useThemeContext();
  const [tab, setTab] = useState(TABS.one.key);

  const renderTab = (tabModel) => {
    const tabStyles = [styles.tab];
    const isActive = tab === tabModel.key;
    const color = isActive ? theme.accent : tinycolor(theme.accent).lighten(10).toHexString();
    if (isActive) {
      tabStyles.push(styles.activeTab);
      tabStyles.push({ borderColor: color });
    }
    return (
      <TouchableOpacity
        key={tabModel.key}
        activeOpacity={0.7}
        onPress={() => setTab(tabModel.key)}
        style={tabStyles}
      >
        <Icon type={ICON_TYPES.feather} size={24} color={color} name='trophy' {...tabModel.icon} />
        <Text color={color} style={{ marginTop: 4, fontWeight: isActive ? 'bold' : '300' }}>
          {tabModel.label}
        </Text>
      </TouchableOpacity>
    );
  };

  const Component = TABS[tab].Component;

  return (
    <Flex
      flex={1}
      column
      alignItems='stretch'
      style={{ backgroundColor: theme.primary, height: Helpers.screenHeight }}
    >
      <Component navigation={navigation} />
      <Flex
        alignItems='center'
        flex={0}
        style={[styles.tabBarContainer, { backgroundColor: Helpers.contrast(theme.primary) }]}
      >
        {values(TABS).map(renderTab)}
      </Flex>
    </Flex>
  );
}
