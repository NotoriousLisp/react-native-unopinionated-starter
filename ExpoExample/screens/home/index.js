import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { values } from 'lodash';
import { Flex, Button, Text, Icon, ICON_TYPES } from 'app/components/primitives';
import ThemePicker from 'app/components/theme.picker';
import { useThemeContext } from '../../state/theme.state';
import { useGlobalContext } from '../../state/global.state';
import { Helpers } from '../../components/primitives';
import styles from './styles';

const TABS = {
  one: { key: 'one', label: 'Tab One', icon: { name: 'home' } },
  two: { key: 'two', label: 'Tab Two', icon: { name: 'heart' } },
  three: { key: 'three', label: 'Tab Three', icon: { name: 'image' } },
  four: { key: 'four', label: 'Tab Four', icon: { name: 'github' } }
};

export default function HomeScreen({ navigation }) {
  const [theme] = useThemeContext();
  const [state, actions] = useGlobalContext();
  const [tab, setTab] = useState(TABS.one.key);
  useEffect(() => {
    navigation.setOptions({
      title: `Welcome Back ${state.user.firstName} ${state.user.lastName}`,
      headerStyle: {
        backgroundColor: Helpers.tertiary(theme.primary),
        shadowRadius: 0,
        shadowOffset: {
          height: 0
        }
      },
      headerTintColor: theme.accent
    });
  }, [theme]);

  const renderTab = tabModel => {
    const tabStyles = [styles.tab];
    if (tab === tabModel.key) {
      tabStyles.push(styles.activeTab);
      tabStyles.push({ borderColor: theme.accent });
    }
    return (
      <TouchableOpacity
        key={tabModel.key}
        activeOpacity={0.7}
        onPress={() => setTab(tabModel.key)}
        style={tabStyles}
      >
        <Icon
          type={ICON_TYPES.feather}
          size={24}
          color={theme.accent}
          name='trophy'
          {...tabModel.icon}
        />
        <Text color={theme.accent} style={{ marginTop: 4 }}>
          {tabModel.label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Flex
      flex={1}
      column
      alignItems='stretch'
      justifyContent='flex-end'
      style={{ backgroundColor: theme.primary }}
    >
      <Flex
        flex={1}
        column
        justifyContent='flex-end'
        alignItems='stretch'
        alignSelf='stretch'
        style={{ paddingBottom: 30 }}
      >
        <ThemePicker />
        <Button
          style={{ alignSelf: 'center', marginTop: 10 }}
          label='Logout'
          onPress={() => actions.signout(navigation)}
        />
      </Flex>
      <Flex
        alignItems='center'
        flex={0}
        style={[styles.tabBarContainer, { backgroundColor: Helpers.tertiary(theme.primary) }]}
      >
        {values(TABS).map(renderTab)}
      </Flex>
    </Flex>
  );
}
